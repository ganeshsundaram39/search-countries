import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllInfoHttpService {
  constructor(private _http: HttpClient) {}

  getAllData() {
    return this._http.get('https://restcountries.com/v2/all');
  }
}
