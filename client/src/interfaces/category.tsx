export interface Category {
    categoryId: number,
    name: string,
    ownerId: number
}

export interface OnCategoryItemSelected {
    onSelected: ((category: Category) => void)
}