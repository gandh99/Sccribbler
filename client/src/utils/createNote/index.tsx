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

export const sortByTimeElapsed = (timeElapsed1: number, timeElapsed2: number): number => {
    return timeElapsed1 - timeElapsed2
}

export const getColorFromTimeElapsed = (timeElapsed: number, duration: number): string => {
    const fractionElapsed = timeElapsed / duration
    let red: number = 0
    let green: number = 0
    let blue: number = 0
    
    if (fractionElapsed <= 0.2) {
        red = 255
        green = Math.round(255 * fractionElapsed * 5)
        blue = 0
    } else if (fractionElapsed <= 0.4) {
        red = Math.round(255 - ((fractionElapsed - 0.2) / 0.2))
        green = 255
        blue = 0
    } else if (fractionElapsed <= 0.6) {
        red = 0
        green = 255
        blue = Math.round(255 * (fractionElapsed - 0.4) / 0.2)
    } else if (fractionElapsed <= 0.8) {
        red = 0
        green = Math.round(255 - ((fractionElapsed - 0.6) / 0.2))
        blue = 255
    } else {
        red = Math.round(255 * (fractionElapsed - 0.8) / 0.2)
        green = 0
        blue = 255
    }

    return `rgb(${red}, ${green}, ${blue})`
}