import { ICategory } from "./category";

export interface IScribble {
    scribbleId: string | number,
    timeElapsed: number,
    text: string
}

export interface INote {
    noteId: string | number,
    title: string,
    videoUrl: string,
    category?: ICategory
    allScribbles: IScribble[],
    updatedAt?: Date
}