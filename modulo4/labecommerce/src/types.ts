
export type User = {
    id: string,
    name: string,
    email: string,
    password: string
};

export type Product = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type UserAndPurchases = {
    user_id: string,
    user_name: string,
    email: string,
    password: string, 
    product_id: string | null,
    product_name: string | null,
    price: number | null,
    image_url: string | null,
    quantity: number | null,
    total_price: number | null
}