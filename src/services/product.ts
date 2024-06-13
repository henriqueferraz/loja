import { Product } from "@/types/product";
import { products } from "@/data/products";
import { Category } from "@/types/category";
import { category } from "@/data/category";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getAllCategory = async (): Promise<Category[]> => {
    return category
}