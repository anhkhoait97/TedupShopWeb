import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './car.interface';
import data from './cars-data';
@Injectable()
export class CarService {
    constructor(private http: HttpClient) {}
    getCarsSmall() {
        return this.http.get<Car>('https://jsonplaceholder.typicode.com/todos/1')
                                .toPromise()
                                .then(data => { return data; });     
    }
}