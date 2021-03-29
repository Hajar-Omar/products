import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: IProduct[];
  keyword =''
  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  ngOnInit() {}

  loadProducts() {
    this.productService.getProducts(this.keyword).subscribe((d) => {
      this.products = d.data.products;
    });
  }
}
