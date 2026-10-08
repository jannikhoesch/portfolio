import { describe, expect, it } from 'vitest'
import {
  formatDate,
  getListedProjects,
  getProjects,
  isListedPost,
} from './utils'

describe('formatDate', () => {
  it('formats a date without the relative suffix', () => {
    expect(formatDate('2025-03-31', false)).toMatch(/Mar 31, 2025/)
  })
})

describe('getProjects', () => {
  it('loads blog posts with required metadata', () => {
    const posts = getProjects()

    expect(posts.length).toBeGreaterThan(0)

    for (const post of posts) {
      expect(post.slug).toBeTruthy()
      expect(post.metadata.title).toBeTruthy()
      expect(post.metadata.publishedAt).toBeTruthy()
      expect(post.metadata.summary).toBeTruthy()
      expect(post.content.trim().length).toBeGreaterThan(0)
    }
  })

  it('includes listed posts in the public list and filters unlisted ones', () => {
    const allPosts = getProjects()
    const listedPosts = getListedProjects()
    const silentRetreat = allPosts.find((post) => post.slug === 'silent-retreat')

    expect(silentRetreat).toBeTruthy()
    expect(silentRetreat?.metadata.listed).toBe(true)
    expect(isListedPost(silentRetreat!)).toBe(true)
    expect(listedPosts.some((post) => post.slug === 'silent-retreat')).toBe(
      true
    )

    const unlistedExample = {
      ...silentRetreat!,
      metadata: { ...silentRetreat!.metadata, listed: false },
    }
    expect(isListedPost(unlistedExample)).toBe(false)
    expect(
      listedPosts.every((post) => post.metadata.listed !== false)
    ).toBe(true)
  })
})
