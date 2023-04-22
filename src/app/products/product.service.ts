import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import behaviour subject
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // object create for bs

  search = new BehaviorSubject("")

  constructor(private http: HttpClient) { }

  // api call to generate view all oproducts

  viewAllProduct() {
    return this.http.get('http://localhost:3000/products')
  }

  // api call to generate single product

  viewProduct(productId: any) {
    return this.http.get('http://localhost:3000/products/'+productId)
  }

  // api to delete a product

  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  // api to add new product

  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products/',productData)
  }

  // api call to update product

UpdateData(productId:any,productData:any){

  return this.http.put('http://localhost:3000/products/'+productId,productData)

}

}

