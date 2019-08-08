import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CardsService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:4200/assets/';

  getSearch = () => this.http.get(this.api + 'data.json');
  getDetails = () => this.http.get(this.api + 'details.json');
}
