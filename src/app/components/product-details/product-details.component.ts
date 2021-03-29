import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadProductDetails();
  }

  loadProductDetails() {
    this.productService
      .getProductById(this.activatedRoute.snapshot.params["id"])
      .subscribe((d) => {
        this.product = d.data;
      });
  }
}
