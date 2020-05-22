export interface IScribble {
    scribble_id: string | number,
    timeElapsed: number,
    text: string
}

export interface INote {
    note_id: string | number,
    title: string,
    videoUrl: string,
    allScribbles: IScribble[],
    updated_at?: Date
}