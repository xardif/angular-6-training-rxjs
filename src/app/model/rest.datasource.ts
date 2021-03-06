import { Injectable, Inject } from "@angular/core";
import { InjectionToken } from "@angular/core";
import { Http, RequestMethod, Request, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(private http: Http, @Inject(REST_URL) private url: string) { }

  getData(): Observable<Product[]> {
    return this.http.get(this.url).delay(2000).map(response => response.json());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.createIdUrl(id)).map(response => response.json());
  }

  updateProduct(p: Product): Observable<Product> {
    return this.http.put(this.createIdUrl(p.id), p).map(response => response.json());
  }

  saveProduct(p: Product): Observable<Product> {
    // return this.http.post(this.url, p).map(response => response.json());
    return this.sendRequest(RequestMethod.Post, this.url, p);
  }

  createIdUrl(id: number): string {
    return this.url + "/" + id;
  }
  
  // request consolitation
  private sendRequest(verb: RequestMethod, url: string, body?: Product) :Observable<Product>{

    let headers = new Headers();
    headers.set("Access-key", "<secret>");
    headers.set("Application-names", ["app1", "app2"]);

    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body,
      headers: headers
    })).map(response => response.json());
  }
}
