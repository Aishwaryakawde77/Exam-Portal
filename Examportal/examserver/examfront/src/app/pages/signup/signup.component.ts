import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  ngOnInit(): void {}
  formSubmit()
  {
      console.log(this.user);
      if(this.user.username==''||this.user.username==null)
      {
       // alert('User is required..!')
       this.snack.open('User Is Required !!','',{
         duration:3000,
         verticalPosition:'bottom',
         horizontalPosition:'center',
       });
        return;

      }
      //validates


  //adduser:userservice

      this.userService.addUser(this.user).subscribe(
       (data)=>{
        console.log(data)
        //alert("success");
        Swal.fire('Success !!','User is Registerd','success');

      },
      (error)=>{
      console.log(error);
     alert('somthing went wrong');
      
      }      
    );

  }

    
  
}
