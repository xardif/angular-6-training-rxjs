import { Injectable } from "@angular/core";
import { Model } from "./repository.model";
import { RestDataSource } from "./rest.datasource";
import { Product } from "./product.model";
import { Observable } from "rxjs";
import { Resolve } from "@angular/router";

@Injectable()
export class ModelResolver implements Resolve<Product[]> {
    constructor(private model: Model, private dataSource: RestDataSource) { }

    resolve(): Observable<Product[]> {
        console.log('resolve!');
        let products = this.model.getProducts();
        if (products.length == 0) {
            let resolvable = this.dataSource.getData();
            resolvable.subscribe(update => (this.model.setProducts(update)));
            return resolvable;
        } else {
            return null;
        }
    }
}
