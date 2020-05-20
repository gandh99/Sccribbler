export interface IMessage {
    uuid: string,
    timestamp: string,
    text: string
}

export interface INote {
    title: string,
    messages: IMessage[],
    lastUpdated?: Date
}