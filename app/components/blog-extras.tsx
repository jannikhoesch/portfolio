import type { ReactNode } from 'react'

type ScheduleRow = [string, string]

function parseProp<T>(value: T | string): T {
  if (typeof value === 'string') {
    return JSON.parse(value) as T
  }
  return value
}

export function DailySchedule({
  rows,
}: {
  rows: ScheduleRow[] | string
}) {
  const scheduleRows = parseProp<ScheduleRow[]>(rows)

  return (
    <div className="not-prose my-10">
      <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400 mb-5">
        Daily Schedule
      </p>
      <ol className="border-t border-neutral-200 dark:border-neutral-800">
        {scheduleRows.map(([time, activity]) => (
          <li
            key={`${time}-${activity}`}
            className="grid grid-cols-[7.5rem_1fr] gap-4 sm:gap-6 py-3 border-b border-neutral-200 dark:border-neutral-800"
          >
            <span className="font-mono text-[13px] tabular-nums text-neutral-500 dark:text-neutral-400 leading-6">
              {time}
            </span>
            <span className="text-[15px] text-neutral-800 dark:text-neutral-200 leading-6">
              {activity}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

type MoodDay = {
  label: string
  score: number
}

export function MoodBoard({ days }: { days: MoodDay[] | string }) {
  const moodDays = parseProp<MoodDay[]>(days)
  const width = 360
  const height = 220
  const padding = { top: 16, right: 18, bottom: 40, left: 40 }
  const plotWidth = width - padding.left - padding.right
  const plotHeight = height - padding.top - padding.bottom
  const minY = 0
  const maxY = 10

  const points = moodDays.map((day, index) => {
    const x =
      padding.left +
      (moodDays.length === 1
        ? plotWidth / 2
        : (index / (moodDays.length - 1)) * plotWidth)
    const y =
      padding.top + ((maxY - day.score) / (maxY - minY)) * plotHeight
    return { ...day, x, y }
  })

  const polyline = points.map((point) => `${point.x},${point.y}`).join(' ')
  const yTicks = [0, 2, 4, 6, 8, 10]

  return (
    <div className="not-prose my-8 max-w-md mx-auto">
      <p className="text-sm font-medium tracking-tight mb-3">Mood Board</p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto text-neutral-800 dark:text-neutral-200"
        role="img"
        aria-label="Mood over the seven retreat days"
      >
        {yTicks.map((tick) => {
          const y =
            padding.top + ((maxY - tick) / (maxY - minY)) * plotHeight
          return (
            <g key={tick}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.1"
              />
              <text
                x={padding.left - 8}
                y={y + 3}
                textAnchor="end"
                className="fill-neutral-500 dark:fill-neutral-400"
                fontSize="10"
              >
                {tick}
              </text>
            </g>
          )
        })}

        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="currentColor"
          strokeOpacity="0.35"
        />
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={polyline}
        />

        {points.map((point) => (
          <g key={point.label}>
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              className="fill-white dark:fill-black"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x={point.x}
              y={height - padding.bottom + 16}
              textAnchor="middle"
              className="fill-neutral-500 dark:fill-neutral-400"
              fontSize="10"
            >
              {point.label.replace('Day ', '')}
            </text>
          </g>
        ))}

        <text
          x={12}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90 12 ${height / 2})`}
          className="fill-neutral-500 dark:fill-neutral-400"
          fontSize="10"
        >
          Mood
        </text>
        <text
          x={(padding.left + width - padding.right) / 2}
          y={height - 6}
          textAnchor="middle"
          className="fill-neutral-500 dark:fill-neutral-400"
          fontSize="10"
        >
          Days
        </text>
      </svg>
    </div>
  )
}

type Book = {
  title: string
  rating: number
}

export function ReadingList({
  title = 'Reading List',
  books,
}: {
  title?: string
  books: Book[] | string
}) {
  const readingList = parseProp<Book[]>(books)

  return (
    <div className="not-prose my-8 text-left max-w-md mx-auto">
      <p className="text-sm font-medium tracking-tight mb-4 text-center">
        {title}
      </p>
      <ul className="space-y-3">
        {readingList.map((book) => (
          <li
            key={book.title}
            className="flex items-baseline justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0"
          >
            <span className="text-neutral-800 dark:text-neutral-200">
              {book.title}
            </span>
            <span className="shrink-0 tabular-nums text-sm text-neutral-600 dark:text-neutral-400">
              {book.rating}/10
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TallyGroup({ marks }: { marks: number }) {
  const width = 28
  const height = 32
  const lines = Math.min(marks, 4)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-7 h-8 text-neutral-800 dark:text-neutral-200"
      aria-hidden="true"
    >
      {Array.from({ length: lines }).map((_, index) => {
        const x = 6 + index * 5
        return (
          <line
            key={index}
            x1={x}
            y1={4}
            x2={x}
            y2={28}
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        )
      })}
      {marks >= 5 ? (
        <line
          x1={3}
          y1={24}
          x2={25}
          y2={8}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  )
}

export function LeechTally({
  label = 'Final leech counter',
  count,
}: {
  label?: string
  count: number | string
}) {
  const total = typeof count === 'string' ? Number(count) : count
  const groups: number[] = []
  let remaining = total

  while (remaining > 0) {
    groups.push(Math.min(remaining, 5))
    remaining -= 5
  }

  return (
    <div className="not-prose my-8">
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
        {label}
      </p>
      <div
        className="inline-flex flex-wrap items-end justify-center gap-2"
        aria-label={`${total} leeches`}
      >
        {groups.map((marks, index) => (
          <TallyGroup key={`${index}-${marks}`} marks={marks} />
        ))}
      </div>
    </div>
  )
}

export function PhotoCaption({ text }: { text: string }) {
  return (
    <p className="not-prose text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400 mt-8 mb-3">
      {text}
    </p>
  )
}

export function ClosingStatement({ text }: { text: string }) {
  return (
    <p className="not-prose my-10 text-center text-lg sm:text-xl italic text-neutral-700 dark:text-neutral-300 text-balance">
      {text}
    </p>
  )
}

export function RetreatDebrief({ children }: { children: ReactNode }) {
  return (
    <section className="not-prose mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800 text-center">
      {children}
    </section>
  )
}
