import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   /**variables */

   myObject: Array<object> = [
    {email:""},
    {password:""}

  ];


  messageError:string="";
  errorEmail:string="";
  errorPassword:string="";



  /*end variables*/


  formLogin= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required,
      Validators.min(6),
      Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)]),
                        
    
    passwordConfirm: new FormControl('',[Validators.required,
    Validators.min(6),
    Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)])
  });


  /**methos */


    addLogin(form:any){
      this.messageError=""
      let validationPassword:boolean = this.formLogin.get('password')?.value === this.formLogin.get('passwordConfirm')?.value;
     
      
      if(validationPassword){
        this.myObject[0]=this.formLogin.get('email')?.value;
      this.myObject[1]=this.formLogin.get('password')?.value;
      console.log(this.myObject);
      }
      else{
        this.messageError="Passwords do not match";
      }
    }


    validationEmail(): string{
      if((this.formLogin.get('email')?.touched) && this.formLogin.get('email')?.invalid){
          this.errorEmail="Wrong Email"; 
      }else{
        this.errorEmail="";
      }
      return this.errorEmail;
    }

    validationPassword():string{
      if((this.formLogin.get('password')?.touched) && this.formLogin.get('password')?.invalid){
        this.errorPassword="password must have at least 1 lowercase character, 1 uppercase character and a special character #$%&"; 
    }else{
      this.errorPassword="";
    }
    return this.errorPassword;
      

    }








}
