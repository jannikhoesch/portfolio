function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.02-.54-1.02-1.86 0-2.85.78-.78 2.04-.54 2.55-.255 1.26-.405 2.55-.24 3.6.63 1.065-.12 2.085-.45 3.015-.99.255-1.59 1.125-2.805 2.25-3.465-1.95-1.77-4.95-.405-4.95 2.385 0 .54.195 1.125.51 1.62-.045.12-.225.615-.045 1.275 0 .96.84 1.38 1.575 1.62-1.5.405-2.85 1.125-2.85 3.465 0 2.505 1.8 2.805 3.6 2.97.24.21.435.615.435 1.245 0 .9-.015 1.62-.015 1.845 0 .315.225.69.825.57A8.203 8.203 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
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
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-neutral-200 transition-all hover:bg-white/10 hover:text-white ${className}`}
    >
      <GitHubIcon />
      <span>github</span>
    </a>
  )
}
