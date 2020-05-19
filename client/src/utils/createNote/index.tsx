// Timestamp format: H:MM:SS
export const formatTimestamp = (timeElapsedInSeconds: number): string => {
    let divisor: number = 3600  // initial value is the no. of seconds in an hour
    let remainingTime: number = Math.round(timeElapsedInSeconds)
    let times: string[] = []

    while (remainingTime > 0) {
        let timeInUnits: string = Math.floor(remainingTime / divisor).toString()
        if (times.length > 0 && timeInUnits.length === 1) {
            // Pad a leading '0' for minutes and seconds if necessary
            timeInUnits = '0' + timeInUnits
        }

        times.push(timeInUnits)
        remainingTime %= divisor
        divisor /= 60
    }

    return times.join(':')
}