export const formatScribble = (text: string): string => {
    if (!text) return ''
    return text.substr(0, 30) +
        (text.length > 30 ? '...' : '')
}

export const formatTimestamp = (timestampISOString: Date | undefined): string => {
    if (!timestampISOString) return ''

    const timestampInLocalDate: Date = new Date(timestampISOString!)
    const yesterday: Date = getYesterdaysDate()

    if (datesAreOnSameDay(timestampInLocalDate, new Date())) {
        // If message date is today, display: HH:MM <AM | PM>
        return timestampInLocalDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    } else if (yesterday.toLocaleDateString() === timestampInLocalDate.toLocaleDateString()) {
        // Else if message was yesterday, display: Yesterday
        return 'Yesterday'
    } else {
        // Else display the full date: DD/MM/YYYY
        return timestampInLocalDate.getDate()
            + '/' + (timestampInLocalDate.getMonth() + 1)    // month is 0-index based
            + '/' + timestampInLocalDate.getFullYear()
    }
}

export const getYesterdaysDate = (): Date => {
    let yesterday: Date = new Date()
    yesterday.setDate(new Date().getDate() - 1)
    return yesterday
}

export const datesAreOnSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
}