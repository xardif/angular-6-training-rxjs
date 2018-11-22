import { Injectable, Inject } from "@angular/core";
import { InjectionToken } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import "rxjs/add/operator/map";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: Http, @Inject(REST_URL) private url: string) {}

  getData(): Observable<Product[]> {
    return this.http.get(this.url).map(response => response.json());
  }
}
