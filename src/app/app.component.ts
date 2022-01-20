import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public demvdel = 0;
  public customers: Customer[] | undefined; 

  constructor(private customerService: CustomerService){}

  ngOnInit(){
      this.getCustomers();
      this.demvdel = this.getDeliveryPercentage(0,0); 
  }

  public getDeliveryPercentage(dem: number, del: number): number {
      dem = 1222500;
      del = 112300;
    return (((dem-del)/dem)*100);
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(  
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }

    );
  }
  
}
