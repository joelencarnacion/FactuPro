import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-newuseredit',
  templateUrl: './newuseredit.component.html',
  styleUrls: ['./newuseredit.component.scss'],
})
export class NewusereditComponent {
  removeClass = true;

  removeBtn() {
    this.removeClass = !this.removeClass;
  }
  usersPassword = {
    password: 'password',
    show: false,
    confirmPassword: 'password',
    confirmShow: false,
  };
  public selectedValue1 = '';
  selectedList1: data[] = [{ value: 'Manager' }, { value: 'Sales Man' }];

  onClick(type: string) {
    if (type === 'password') {
      if (this.usersPassword.password === 'password') {
        this.usersPassword.password = 'text';
        this.usersPassword.show = true;
      } else {
        this.usersPassword.password = 'password';
        this.usersPassword.show = false;
      }
    } else {
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
