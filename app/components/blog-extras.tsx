type ScheduleRow = [string, string]

function parseProp<T>(value: T | string): T {
  if (typeof value === 'string') {
    return JSON.parse(value) as T
  }
  return value
}

export function DailySchedule({
  title = 'The Way to Practice Dhamma',
  rows,
}: {
  title?: string
  rows: ScheduleRow[] | string
}) {
  const scheduleRows = parseProp<ScheduleRow[]>(rows)

  return (
    <div className="not-prose my-8">
      <p className="text-sm uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400 mb-3">
        Daily Schedule
      </p>
      <h3 className="text-lg font-medium tracking-tight mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm whitespace-normal">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-left">
              <th className="px-4 py-2.5 font-medium w-[40%]">Time</th>
              <th className="px-4 py-2.5 font-medium">Activity</th>
            </tr>
          </thead>
          <tbody>
            {scheduleRows.map(([time, activity]) => (
              <tr
                key={`${time}-${activity}`}
                className="border-b border-neutral-100 dark:border-neutral-800 last:border-0"
              >
                <td className="px-4 py-2.5 tabular-nums text-neutral-600 dark:text-neutral-400 align-top">
                  {time}
                </td>
                <td className="px-4 py-2.5 text-neutral-800 dark:text-neutral-200">
                  {activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

type MoodDay = {
  label: string
  score: number
  note?: string
}

export function MoodBoard({ days }: { days: MoodDay[] | string }) {
  const moodDays = parseProp<MoodDay[]>(days)

  return (
    <div className="not-prose my-8">
      <div className="space-y-3">
        {moodDays.map((day) => (
          <div key={day.label} className="grid grid-cols-[4.5rem_1fr_auto] gap-3 items-center">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {day.label}
            </span>
            <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
              <div
                className="h-full rounded-full bg-neutral-800 dark:bg-neutral-200"
                style={{ width: `${Math.min(Math.max(day.score, 0), 10) * 10}%` }}
              />
            </div>
            <span className="text-sm tabular-nums text-neutral-700 dark:text-neutral-300 w-14 text-right">
              {day.score}/10
            </span>
            {day.note ? (
              <span className="col-span-3 -mt-1 text-xs text-neutral-500 dark:text-neutral-400 pl-[4.5rem]">
                {day.note}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

type Book = {
  title: string
  rating: number
}

export function ReadingList({ books }: { books: Book[] | string }) {
  const readingList = parseProp<Book[]>(books)

  return (
    <div className="not-prose my-8">
      <ul className="space-y-3">
        {readingList.map((book) => (
          <li
            key={book.title}
            className="flex items-baseline justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0"
          >
            <span className="text-neutral-800 dark:text-neutral-200">{book.title}</span>
            <span className="shrink-0 tabular-nums text-sm text-neutral-600 dark:text-neutral-400">
              {book.rating}/10
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function RetreatStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="not-prose my-8 rounded-lg border border-neutral-200 dark:border-neutral-800 px-5 py-4">
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
      <p className="text-2xl font-medium tracking-tight tabular-nums">{value}</p>
    </div>
  )
}
