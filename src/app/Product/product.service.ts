import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private apiUrl = 'http://localhost:8081/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }

    createProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.apiUrl, product);
    }

    updateProduct(id: string, product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
    }

    deleteProduct(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
