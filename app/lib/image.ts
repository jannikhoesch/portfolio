import { existsSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

/** Layout is max-w-xl (~36rem); no need for full-viewport variants. */
export const CONTENT_IMAGE_SIZES = '(max-width: 768px) 100vw, 36rem'
export const CONTENT_IMAGE_QUALITY = 75

/** Tiny neutral JPEG used when a real blur cannot be generated. */
export const FALLBACK_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGcP//Z'

const blurCache = new Map<string, string>()

export async function getBlurDataURL(src?: string): Promise<string> {
  if (!src?.startsWith('/')) return FALLBACK_BLUR
  const cached = blurCache.get(src)
  if (cached) return cached

  const filePath = join(process.cwd(), 'public', src)
  if (!existsSync(filePath)) return FALLBACK_BLUR

  try {
    const buffer = await sharp(filePath)
      .rotate()
      .resize(16, 16, { fit: 'inside' })
      .jpeg({ quality: 50 })
      .toBuffer()
    const dataURL = `data:image/jpeg;base64,${buffer.toString('base64')}`
    blurCache.set(src, dataURL)
    return dataURL
  } catch {
    return FALLBACK_BLUR
  }
}
