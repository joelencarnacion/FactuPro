import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent {
  public selectedValue1 = ''
  removeClass = true;
  
  removeBtn(){
    this.removeClass = !this.removeClass
  }
  selectedList1: data[] = [
    {value: 'Owner'},
  ];
  password='password'
  show = false;
   

 
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
