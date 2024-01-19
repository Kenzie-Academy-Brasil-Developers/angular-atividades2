import { Injectable } from "@angular/core";
import { IProduct, TCreateProductData } from "../interfaces/product.interfaces";

@Injectable({ providedIn: "root"})
export class ProductService{
    private productList: IProduct[] = [];

    getProductList(){
        return this.productList;
    }

    addProduct(formData: TCreateProductData){
        const newProduct = { ...formData, id: crypto.randomUUID()};
        this.productList.push(newProduct);
    }

    removeProduct(removingId: string){
        const index = this.productList.findIndex(product => product.id === removingId);
        this.productList.splice(index, 1);
    }
}