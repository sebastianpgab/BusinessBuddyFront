import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

getProducts(){
  return this.httpClient.get<Product[]>(`${this.apiBaseUrl}/product`)
}

}
