export const formatScribble = (text: string): string => {
    if (!text) return ''
    return text.substr(0, 30) +
        (text.length > 30 ? '...' : '')
}