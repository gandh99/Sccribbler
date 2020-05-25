export enum DrawerLinkType {
    ALL_NOTES,
    NOTIFICATIONS,
    CREATE_NOTE,
}

export interface IDrawerListItem {
    drawerLinkType: DrawerLinkType,
    link: string,
    icon: any,
    text: string
}