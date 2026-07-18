import { beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

const { streamTextMock, toDataStreamResponseMock, gatewayMock } = vi.hoisted(() => ({
  streamTextMock: vi.fn(),
  toDataStreamResponseMock: vi.fn(),
  gatewayMock: vi.fn((model: string) => model),
}))

vi.mock('ai', () => ({
  streamText: (...args: unknown[]) => streamTextMock(...args),
}))

vi.mock('@ai-sdk/openai', () => ({
  createOpenAI: () => gatewayMock,
}))

describe('POST /api/chat', () => {
  beforeEach(() => {
    streamTextMock.mockReset()
    toDataStreamResponseMock.mockReset()
    gatewayMock.mockClear()
    toDataStreamResponseMock.mockReturnValue(new Response('ok', { status: 200 }))
    streamTextMock.mockReturnValue({
      toDataStreamResponse: toDataStreamResponseMock,
    })
  })

  it('streams a response for user messages', async () => {
    const request = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ id: '1', role: 'user', content: 'Hello' }],
      }),
    })

    const response = await POST(request)

    expect(response.status).toBe(200)
    expect(streamTextMock).toHaveBeenCalledOnce()
    expect(toDataStreamResponseMock).toHaveBeenCalledOnce()

    const call = streamTextMock.mock.calls[0][0]
    expect(call.model).toBe('google/gemini-2.5-flash-lite')
    expect(gatewayMock).toHaveBeenCalledWith('google/gemini-2.5-flash-lite')
    expect(call.messages[0].role).toBe('system')
    expect(call.messages.at(-1)).toMatchObject({
      role: 'user',
      content: 'Hello',
    })
  })
})
