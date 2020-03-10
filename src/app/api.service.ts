import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people`)
  }

  getPerson(id) {
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/${id}`)
  }

  // getPlanets() {
  //   return this.httpClient.get(`https://swapi.co/api/planets`)
  // }

  // getStarships() {
  //   return this.httpClient.get(`https://swapi.co/api/starships`)
  // }

}
