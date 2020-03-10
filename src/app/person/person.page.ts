import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  

  constructor(private apiService: ApiService, private router: Router) {}

  person;

  ngOnInit() {
    var url = this.router.url
    var id = url.split('/').pop()

    this.apiService.getPerson(id).subscribe((data)=>{
      console.log(data)
      this.person = data;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
