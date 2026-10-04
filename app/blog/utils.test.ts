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

  it('keeps unlisted posts available by slug but out of the public list', () => {
    const allPosts = getProjects()
    const listedPosts = getListedProjects()
    const unlisted = allPosts.find((post) => post.slug === 'silent-retreat')

    expect(unlisted).toBeTruthy()
    expect(unlisted?.metadata.listed).toBe(false)
    expect(isListedPost(unlisted!)).toBe(false)
    expect(listedPosts.some((post) => post.slug === 'silent-retreat')).toBe(
      false
    )
    expect(listedPosts.length).toBe(allPosts.length - 1)
  })
})
