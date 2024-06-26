import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: User = {
    email: '',
    password: '',
    name: '',
    location:'',

    
  };
  message: string = '';

}
