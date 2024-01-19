export interface IProduct{
    id: string;
    name: string;
    price: number;
    description: string;
}

export type TCreateProductData = Omit<IProduct, 'id'>;