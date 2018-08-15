import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



// all HTTP responses will be in the form of observable; .map observable
//            |
// import { Observable } from 'rxjs/Observable';
import { observable } from '../../../node_modules/rxjs';


@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res) => res.json());
  }
}
