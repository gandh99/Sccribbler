export interface IScribble {
    scribbleId: string | number,
    timeElapsed: string,
    text: string
}

export interface INote {
    noteId: string | number,
    title: string,
    videoUrl: string,
    allScribbles?: IScribble[],
    updatedAt?: Date
}