export interface ICategory {
    categoryId: number,
    name: string,
    ownerId: number
}

export interface OnCategoryItemSelected {
    onSelected: ((category: ICategory) => void)
}