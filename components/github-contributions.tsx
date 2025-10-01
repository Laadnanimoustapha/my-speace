"use client"

import { Card, CardContent } from "@/components/ui/card"

export function GitHubContributions() {
  // Generate contribution data for the last year
  const generateContributions = () => {
    const contributions = []
    const today = new Date()
    const startDate = new Date(today)
    startDate.setDate(startDate.getDate() - 364) // Last 52 weeks

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + i)
      const level = Math.floor(Math.random() * 5) // 0-4 contribution levels
      contributions.push({
        date: date.toISOString().split("T")[0],
        count: level * 3,
        level,
      })
    }
    return contributions
  }

  const contributions = generateContributions()
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  // Group by weeks
  const weeks = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["Mon", "Wed", "Fri"]

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-gray-200 dark:bg-gray-800"
      case 1:
        return "bg-green-200 dark:bg-green-900"
      case 2:
        return "bg-green-400 dark:bg-green-700"
      case 3:
        return "bg-green-600 dark:bg-green-500"
      case 4:
        return "bg-green-800 dark:bg-green-400"
      default:
        return "bg-gray-200 dark:bg-gray-800"
    }
  }

  return (
    <Card>
      <CardContent className="pt-8">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{totalContributions} contributions</span> in the last year
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            {/* Month labels */}
            <div className="flex gap-1 mb-2 ml-8">
              {months.map((month, i) => (
                <div key={i} className="text-xs text-muted-foreground" style={{ width: "44px" }}>
                  {month}
                </div>
              ))}
            </div>
            {/* Contribution grid */}
            <div className="flex gap-1">
              {/* Day labels */}
              <div className="flex flex-col gap-1 text-xs text-muted-foreground pr-2">
                <div style={{ height: "10px" }}></div>
                <div style={{ height: "10px" }}>Mon</div>
                <div style={{ height: "10px" }}></div>
                <div style={{ height: "10px" }}>Wed</div>
                <div style={{ height: "10px" }}></div>
                <div style={{ height: "10px" }}>Fri</div>
                <div style={{ height: "10px" }}></div>
              </div>
              {/* Weeks */}
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(day.level)} hover:ring-2 hover:ring-indigo-600 transition-all cursor-pointer`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-[10px] h-[10px] rounded-sm bg-gray-200 dark:bg-gray-800" />
                <div className="w-[10px] h-[10px] rounded-sm bg-green-200 dark:bg-green-900" />
                <div className="w-[10px] h-[10px] rounded-sm bg-green-400 dark:bg-green-700" />
                <div className="w-[10px] h-[10px] rounded-sm bg-green-600 dark:bg-green-500" />
                <div className="w-[10px] h-[10px] rounded-sm bg-green-800 dark:bg-green-400" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://github.com/Laadnanimoustapha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            Learn how we count contributions
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
