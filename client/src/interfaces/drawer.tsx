export enum DrawerLinkType {
    ALL_NOTES,
    STARRED_NOTES,
    CREATE_NOTE,
}

export interface IDrawerListItem {
    drawerLinkType: DrawerLinkType,
    link: string,
    icon: any,
    text: string
}