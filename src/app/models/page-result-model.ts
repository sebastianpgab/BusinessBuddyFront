export interface PagedResult<T> {
    items: Array<T>,
    totalPages: number,
    itemsFrom: number,
    itemsTo: number,
    totalItemCount: number
}