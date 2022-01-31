import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from "./customer";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class CustomerService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}
    
    public getCustomers(): Observable<Customer[]>{
        return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/list`);
    }

    public getCustomersById(id: number): Observable<Customer[]>{
        return this.http.get<Customer[]>(`${this.apiServerUrl}/${id}`);
    }

    //will contain customer ID, Name, Shelf Life, Service Level, Contract Index Everytime
    public updateCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.apiServerUrl}/customer/update`, customer);
    }

}