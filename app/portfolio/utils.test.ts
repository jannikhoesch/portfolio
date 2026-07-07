import { describe, expect, it } from 'vitest'
import { formatDate, getProjects } from './utils'

describe('formatDate', () => {
  it('formats a date without the relative suffix', () => {
    expect(formatDate('2025-03-02', false)).toMatch(/Mar 2, 2025/)
  })

  it('includes a relative suffix when requested', () => {
    expect(formatDate('2025-03-02', true)).toMatch(/Mar 2, 2025 \(.+\)/)
  })
})

describe('getProjects', () => {
  it('loads portfolio projects with required metadata', () => {
    const projects = getProjects()

    expect(projects.length).toBeGreaterThan(0)

    for (const project of projects) {
      expect(project.slug).toBeTruthy()
      expect(project.metadata.title).toBeTruthy()
      expect(project.metadata.publishedAt).toBeTruthy()
      expect(project.metadata.summary).toBeTruthy()
      expect(project.content.trim().length).toBeGreaterThan(0)
    }
  })

  it('uses unique slugs for all projects', () => {
    const slugs = getProjects().map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})
