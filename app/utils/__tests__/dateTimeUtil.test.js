import { formatTimeForWeeklySnapshot, formatTimeForCompletedWorkout, formatWorkoutTime } from '../dateTimeUtil'

describe('Time Formatting Functions', () => {
  describe('formatTimeForWeeklySnapshot', () => {
    test('should format 0 milliseconds correctly', () => {
      expect(formatTimeForWeeklySnapshot(0)).toBe('0h 0m')
    })

    test('should format 1 hour correctly', () => {
      expect(formatTimeForWeeklySnapshot(3600000)).toBe('1h 0m')
    })

    test('should format 1 hour 30 minutes correctly', () => {
      expect(formatTimeForWeeklySnapshot(5400000)).toBe('1h 30m')
    })

    test('should handle large numbers correctly', () => {
      expect(formatTimeForWeeklySnapshot(1000000000000)).toBe('277777h 46m')
    })
  })

  describe('formatTimeForCompletedWorkout', () => {
    test('should format 0 seconds correctly', () => {
      expect(formatTimeForCompletedWorkout(0)).toBe('0s')
    })

    test('should format 59 seconds correctly', () => {
      expect(formatTimeForCompletedWorkout(59)).toBe('59s')
    })

    test('should format 60 seconds correctly', () => {
      expect(formatTimeForCompletedWorkout(60)).toBe('0h 1m')
    })

    test('should format 1 hour 30 minutes correctly', () => {
      expect(formatTimeForCompletedWorkout(5400)).toBe('1h 30m')
    })
  })

  describe('formatWorkoutTime', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern')
      jest.setSystemTime(new Date('2023-03-15T12:00:00'))
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    test('should format current time correctly', () => {
      expect(formatWorkoutTime(Date.now())).toBe('0m ago')
    })

    test('should format 30 minutes ago correctly', () => {
      expect(formatWorkoutTime(Date.now() - 30 * 60000)).toBe('30m ago')
    })

    test('should format 1 hour ago correctly', () => {
      expect(formatWorkoutTime(Date.now() - 60 * 60000)).toBe('1 hour ago')
    })

    test('should format 2 hours ago correctly', () => {
      expect(formatWorkoutTime(Date.now() - 2 * 60 * 60000)).toBe('2 hours ago')
    })

    test('should format yesterday correctly', () => {
      const yesterday = new Date('2023-03-14T12:00:00').getTime()
      expect(formatWorkoutTime(yesterday)).toBe('Yesterday at 12:00 PM')
    })

    test('should format date in the past correctly', () => {
      const pastDate = new Date('2023-01-01T12:00:00').getTime()
      expect(formatWorkoutTime(pastDate)).toBe('01/01/2023 at 12:00 PM')
    })
  })
})
