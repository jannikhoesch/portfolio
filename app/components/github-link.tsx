function GitHubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-.88 0-1.9-.25-2.75 0 0-2.2 0-4.5 2.05-.83-.22-1.72-.33-2.6-.33s-1.77.11-2.6.33C6.45 3.2 4.25 3.2 4.25 3.2c-.25.85-.53 1.87-.25 2.75-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

type GitHubLinkProps = {
  href: string
  className?: string
}

export function GitHubLink({ href, className = '' }: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View project on GitHub"
      className={`inline-flex text-neutral-300 transition-colors hover:text-white ${className}`}
    >
      <GitHubIcon />
    </a>
  )
}
