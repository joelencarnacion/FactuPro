import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
  password='password'
  show = false;
  public routes = routes;
  public selectedValue1 = ''
  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'Owner'},
  ];

   

 

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
