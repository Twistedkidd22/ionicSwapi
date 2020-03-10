import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private apiService: ApiService) {}

  people;
  next;
  previous;

  ionViewDidEnter(){
    this.apiService.getPeople().subscribe((data)=>{
      console.log(data)
      this.people = data['results']
      this.next = data['next']
      this.previous = data['previous']

      this.people.forEach(person => {
        person.id = person.url.split('/')[5]
      });
    });
  }




}
