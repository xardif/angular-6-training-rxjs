import { Injectable, Optional, inject, Inject, Injector } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
  private products: Product[] = new Array<Product>();
  private locator = (p: Product, id: number) => p.id == id;

  constructor(private dataSource: RestDataSource, private injector: Injector) {}

  getProducts(): Product[] {
    return this.products;
  }
  setProducts(update: Product[]): void {
    this.products = update;
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
  /**
   * To verify a navigation within the same component
   */
  getNextProductId(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[this.products.length > index + 1 ? index + 1 : 0].id;
    } else {
      return id || 0;
    }
  }

  getPreviousProductId(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[index > 0 ? index - 1 : this.products.length - 1].id;
    } else {
      return id || 0;
    }
  }
}
