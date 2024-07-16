import { formatTimeForWeeklySnapshot, formatTimeForCompletedWorkout, formatWorkoutTime } from '../dateTimeUtil'

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
