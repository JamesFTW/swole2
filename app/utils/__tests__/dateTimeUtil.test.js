import {
  formatTimeForWeeklySnapshot,
  formatTimeForCompletedWorkout,
  formatWorkoutTime,
  getLocalDateString,
} from '../dateTimeUtil'

describe('formatTimeForWeeklySnapshot', () => {
  it('formats time correctly', () => {
    expect(formatTimeForWeeklySnapshot(3661)).toBe('1h 1m')
    expect(formatTimeForWeeklySnapshot(7200)).toBe('2h 0m')
    expect(formatTimeForWeeklySnapshot(5400)).toBe('1h 30m')
    expect(formatTimeForWeeklySnapshot(3599)).toBe('0h 59m')
    expect(formatTimeForWeeklySnapshot(0)).toBe('0h 0m')
  })
})

describe('formatTimeForCompletedWorkout', () => {
  it('formats time correctly', () => {
    expect(formatTimeForCompletedWorkout(3661)).toBe('1h 1m')
    expect(formatTimeForCompletedWorkout(7200)).toBe('2h 0m')
    expect(formatTimeForCompletedWorkout(5400)).toBe('1h 30m')
    expect(formatTimeForCompletedWorkout(59)).toBe('59s')
    expect(formatTimeForCompletedWorkout(0)).toBe('0s')
  })
})

describe('formatWorkoutTime', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2023-05-15T12:00:00'))
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('formats time correctly for today', () => {
    expect(formatWorkoutTime(new Date('2023-05-15T11:59:00').getTime())).toBe('1m ago')
    expect(formatWorkoutTime(new Date('2023-05-15T11:00:00').getTime())).toBe('1 hour ago')
    expect(formatWorkoutTime(new Date('2023-05-15T10:00:00').getTime())).toBe('2 hours ago')
  })

  it('formats time correctly for yesterday', () => {
    expect(formatWorkoutTime(new Date('2023-05-14T23:59:59').getTime())).toBe('Yesterday at 11:59 PM')
  })

  it('formats time correctly for other dates', () => {
    expect(formatWorkoutTime(new Date('2023-05-13T15:30:00').getTime())).toBe('05/13/2023 at 3:30 PM')
  })
})

describe('getLocalDateString', () => {
  it('returns the correct date string for a given date', () => {
    const testDate = new Date('2023-07-15T12:00:00')
    expect(getLocalDateString(testDate)).toBe('2023-07-15')
  })

  it('handles single-digit months and days correctly', () => {
    const testDate = new Date('2023-01-05T12:00:00')
    expect(getLocalDateString(testDate)).toBe('2023-01-05')
  })

  it('handles year rollover correctly', () => {
    const testDate1 = new Date('2023-12-31T23:59:59')
    expect(getLocalDateString(testDate1)).toBe('2023-12-31')

    const testDate2 = new Date('2024-01-01T00:00:01')
    expect(getLocalDateString(testDate2)).toBe('2024-01-01')
  })

  it('returns correct results for different time zones', () => {
    // Create a date object for midnight UTC
    const date = new Date('2023-07-15T00:00:00Z')

    // Get the local date string
    const result = getLocalDateString(date)

    // The expected result depends on the local time zone
    // It will be '2023-07-14' for time zones behind UTC (e.g., PST, EST)
    // and '2023-07-15' for time zones ahead of or at UTC
    expect(['2023-07-14', '2023-07-15']).toContain(result)
  })

  it('uses the current date when no argument is provided', () => {
    const realDate = Date
    const mockDate = new Date('2023-07-15T12:00:00')
    global.Date = class extends Date {
      constructor() {
        super()
        return mockDate
      }
    }

    expect(getLocalDateString()).toBe('2023-07-15')

    global.Date = realDate
  })
})
