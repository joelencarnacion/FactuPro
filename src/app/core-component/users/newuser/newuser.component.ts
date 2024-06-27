import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {
  public selectedValue1 = ''
  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'Role'},
    {value: 'Role1'},
  ];
  usersPassword={
    password: 'password',
    show : false,
    confirmPassword:'password',
    confirmShow:false
  }

   

 


  onClick(type:string){
  if(type === 'password'){
    if (this.usersPassword.password === 'password') {
      this.usersPassword.password = 'text';
      this.usersPassword.show = true;
    } else {
      this.usersPassword.password = 'password';
      this.usersPassword.show = false;
    }
  }else{
    if (this.usersPassword.confirmPassword === 'password') {
      this.usersPassword.confirmPassword = 'text';
      this.usersPassword.confirmShow = true;
    } else {
      this.usersPassword.confirmPassword = 'password';
      this.usersPassword.confirmShow = false;
    }
  }
  }

}
