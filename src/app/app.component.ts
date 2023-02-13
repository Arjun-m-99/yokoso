import { Component } from '@angular/core';

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
import { AuthenticationBody } from './ServiceInterfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yokoso';
  authBody: any;
  token: any;
  response:any;

  generateTokenForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  
  authTokenForm = new FormGroup({
    secretKey: new FormControl('', [Validators.required]),
    ipAddress: new FormControl('', [Validators.required]),
  })

  constructor(public appService: AppService) { }

  generateToken() {
    this.authBody = this.generateTokenForm.value;
    this.appService.generateToken(this.authBody)
      .subscribe((response: any) => {
        this.token=response;
        // console.log(this.token);
        console.log(response);
        
      });
  }

  authenticate() {
    this.authBody = this.authTokenForm.value;
    try {
      this.appService.authenticate(this.authBody)
      .subscribe((response: any) => {
        this.response=response;
        // console.log(this.token);
        console.log(response);
        
      });
      
    } catch (error) {
      console.log(error);
      this.response=error;
    }
    
  }

  getCountries() {
    this.appService.getContryStates().subscribe((response) => {
      console.log(response);
    })
  }

  getContryUsers() {
    this.appService.getContryUsers().subscribe((response) => {
      console.log(response);
    })
  }


}
