"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export interface CalendarProps {
  mode?: "single" | "range" | "multiple"
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  className?: string
  disabled?: (date: Date) => boolean
  initialFocus?: boolean
}

function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
  disabled,
  initialFocus,
  ...props
}: CalendarProps) {
  const [month, setMonth] = React.useState<Date>(selected || new Date())

  // Navigation
  const goToPreviousMonth = () => setMonth((prev) => subMonths(prev, 1))
  const goToNextMonth = () => setMonth((prev) => addMonths(prev, 1))

  // Grid calculation
  const monthStart = startOfMonth(month)
  const monthEnd = endOfMonth(month)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })
  
  // Ensure we always show 6 weeks (42 days) to prevent layout shift
  // Calculate if we need extra days to reach 42
  const daysInGrid = eachDayOfInterval({ start: calendarStart, end: calendarEnd })
  const weeksNeeded = 6
  const currentWeeks = Math.ceil(daysInGrid.length / 7)
  const extraDaysNeeded = (weeksNeeded - currentWeeks) * 7
  
  // Re-calculate end date if we need more weeks
  const finalCalendarEnd = extraDaysNeeded > 0 
    ? endOfWeek(addMonths(monthEnd, 1), { weekStartsOn: 0 }) // Simplified, usually just adding days works but interval is safer
    : calendarEnd

  // Actually, simplest way to get 42 days:
  // generate 42 days starting from calendarStart
  const days = React.useMemo(() => {
     const daysArray: Date[] = []
     const start = new Date(calendarStart)
     for (let i = 0; i < 42; i++) {
       const date = new Date(start)
       date.setDate(start.getDate() + i)
       daysArray.push(date)
     }
     return daysArray
  }, [calendarStart])


  const handleDayClick = (day: Date, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled?.(day)) return
    // Create a new Date object to ensure we're not passing a mutated reference
    const selectedDate = new Date(day)
    selectedDate.setHours(0, 0, 0, 0) // Normalize to midnight
    onSelect?.(selectedDate)
  }

  return (
    <div className={cn("p-3 w-fit", className)} {...props}>
      {/* Header / Navigation */}
      <div className="flex items-center justify-between space-y-4 mb-4">
        <div className="font-semibold text-sm pl-2">
            {format(month, "MMMM yyyy")}
        </div>
        <div className="space-x-1 flex items-center">
            <button
                type="button"
                onClick={goToPreviousMonth}
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                )}
            >
                <ChevronLeft className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={goToNextMonth}
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                )}
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 w-full mb-2 place-items-center">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div
            key={day}
            className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center flex justify-center"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 w-full gap-y-2 place-items-center">
        {days.map((day, idx) => {
          const isCurrentMonth = isSameMonth(day, month)
          const isSelectedDay = selected && isSameDay(day, selected)
          const isTodayDay = isToday(day)
          const isDisabled = disabled?.(day)

          return (
            <div key={day.toISOString()} className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 flex justify-center w-full">
                <button
                    type="button"
                    onClick={(e) => handleDayClick(day, e)}
                    disabled={isDisabled}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                        !isCurrentMonth && "text-muted-foreground opacity-50",
                        isSelectedDay && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground opacity-100",
                        isTodayDay && !isSelectedDay && "bg-accent text-accent-foreground",
                        isDisabled && "text-muted-foreground opacity-50 cursor-not-allowed hover:bg-transparent"
                    )}
                >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                    </time>
                </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
