import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pid: any
  pData: any
  constructor(private ar: ActivatedRoute, private ps: ProductService) {

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })

    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pData = data
      console.log(this.pData);

    })
  }

  updateProduct(form:any){
 
    this.ps.UpdateData(this.pid,this.pData).subscribe((item:any)=>{

      alert(" Details Updated")
    })
  }
}
