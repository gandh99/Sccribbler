export interface IScribble {
    scribble_id: string | number,
    timestamp: string,
    text: string
}

export interface INote {
    note_id: string | number,
    title: string,
    videoUrl: string,
    allScribbles?: IScribble[],
    lastUpdated?: Date
}