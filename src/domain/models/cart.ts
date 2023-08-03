export type Cart = {
  id: string
  accountId: string
  products: Array<{
    id: string
    name: string
    description: string
    price: number
    available: string
    picture: string
    categoryId: string
    quantity: number
  }>
}
