export interface IScribble {
    scribble_id: string | number,
    timestamp: string,
    text: string
}

export interface INote {
    noteId: string | number,
    title: string,
    videoUrl: string,
    allScribbles: IScribble[],
    lastUpdated?: Date
}