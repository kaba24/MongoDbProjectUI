import { Component , OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',

})
export class ProductListComponent implements OnInit  {

products: Product[] = [];

constructor(private productService: ProductService) {}

ngOnInit(): void {
 this.loadProducts();
}

loadProducts(): void {
 this.productService.getProducts().subscribe((data: Product[])=> {
   this.products = data;
 });
}

deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

}
