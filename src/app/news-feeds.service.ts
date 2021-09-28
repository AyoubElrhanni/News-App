import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.API_Key;
const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {

  constructor(private http:HttpClient) { }
  getNews(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
  }
}
