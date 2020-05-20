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

export const getTimeElapsedInSeconds = (timestamp: string): number => {
    const timeUnits: string[] = timestamp.split(':')
    return Number(timeUnits[0]) * 3600 + Number(timeUnits[1]) * 60 + Number(timestamp[0])
}

export const sortByTimestamp = (timestamp1: string, timestamp2: string): number => {
    if (!timestamp1.match(/\d+:\d{2}:\d{2}/) || !timestamp2.match(/\d+:\d{2}:\d{2}/)) {
        throw new Error('Improper timestamp format. Timestamp format should be H:MM:SS')
    }

    const timeElapsed1 = getTimeElapsedInSeconds(timestamp1)
    const timeElapsed2 = getTimeElapsedInSeconds(timestamp2)
    return timeElapsed1 - timeElapsed2
}