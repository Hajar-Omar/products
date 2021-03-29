import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProductDetails, IProductRes } from "../interfaces/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(keyword?: string): Observable<IProductRes> {
    return this.httpClient.get<IProductRes>(
      `https://app.markitworld.com/api/v2/user/products/${keyword}`
    );
  }

  getProductById(id?: string): Observable<IProductDetails> {
    return this.httpClient.get<IProductDetails>(
      `https://app.markitworld.com/api/v2/user/products/${id}`
    );
  }
}
