import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ProductType {
  basePrice:number
  grams: number
  image:string
  price: number
  text: string
  title:string
}

export interface FormType {
  order: string
  name: string
  phone: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  sendOrder (data: FormType){
    return this.http.post('https://testologia.site/burgers-order', data)
  }

  getData () {
    return this.http.get<ProductType[]>('https://testologia.site/burgers-data?extra=black')
  }
}
