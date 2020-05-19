export const isValidUrl = (url: string): boolean => {
    return isYoutubeLink(url)
}

export const isYoutubeLink = (url: string): boolean => {
    let pattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

    return url.match(pattern) !== null
}

export const getYTVideoId = (url: string): string => {
    if (url.includes('youtube') && url.includes('watch?v=')) {
        // If the link is like: https://www.youtube.com/watch?v=fQfWUsa_8ww
        return url.split('watch?v=')[1]
    } else if (url.includes('youtu.be')) {
        // If the link is like: https://youtu.be/fQfWUsa_8ww
        return url.split('youtu.be/')[1]
    }

    throw new Error('Invalid YouTube URL string.')
}

// Not used
export const getEmbeddedUrl = (url: string): string => {
    if (url.includes('youtube') && url.includes('watch?v=')) {
        // If the link is like: https://www.youtube.com/watch?v=fQfWUsa_8ww
        return url.replace('watch?v=', 'embed/')
    } else if (url.includes('youtu.be')) {
        // If the link is like: https://youtu.be/fQfWUsa_8ww
        return url.replace('youtu.be', 'youtube.com/embed')
    }

    return url
}