import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private ps: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  addProductForm = this.fb.group({

    id: [""],
    title: [""],
    catogoryId: [""],
    description: [""],
    price: [""],
    isAvailable: [""],
    productImage: [""],
    rating: [""],
    review: [""],
    warrenty: [""]

  })


  addProduct() {
    let pData = {
      id: this.addProductForm.value.id,
      title: this.addProductForm.value.title,
      catogoryId: this.addProductForm.value.catogoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      isAvailable: this.addProductForm.value.isAvailable,
      productImage: this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      warrenty: this.addProductForm.value.warrenty

    }

    this.ps.addNewProduct(pData).subscribe((item:any) => {
      alert('new component added')
      this.router.navigateByUrl("products")

    })

  }

}
