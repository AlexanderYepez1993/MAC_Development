import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    msg_error = false;
    

    constructor(private formBuilder: FormBuilder, private router: Router, private primengConfig: PrimeNGConfig) { 
      this.form = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    ngOnInit(): void {
      this.primengConfig.ripple = true;
    }

    SignIn(){
      const user = this.form.value.user;
      const password = this.form.value.password;

      if(user == 'ayepez' && password == '123'){
        this.fakeLoading();
      }else{
        this.form.reset();
        this.message_error();
      }
    }

    message_error(){
      this.msg_error = true;
      setTimeout(() => {
        this.msg_error = false;
      }, 3000);
    }

    fakeLoading(){
      this.loading = true;
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    }

}
