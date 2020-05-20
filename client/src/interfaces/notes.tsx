export interface IScribble {
    scribble_id: string | number,
    timestamp: string,
    text: string
}

export interface INote {
    title: string,
    scribbles: IScribble[],
    lastUpdated?: Date
}