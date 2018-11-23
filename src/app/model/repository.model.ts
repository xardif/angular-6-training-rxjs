import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
  private products: Product[] = new Array<Product>();
  private locator = (p: Product, id: number) => p.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData().subscribe(update => (this.products = update));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      this.dataSource.saveProduct(product).subscribe(p => {
        this.products.push(p);
      });
    } else {
      this.dataSource.updateProduct(product).subscribe(updatedProduct => {
        let index = this.products.findIndex(p =>
          this.locator(p, updatedProduct.id)
        );
        this.products.splice(index, 1, updatedProduct);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(deletedProduct => {
      if (this.deleteProduct != null) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
          this.products.splice(index, 1);
        }
      }
    });
  }
}
