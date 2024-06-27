import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-createexpense',
  templateUrl: './createexpense.component.html',
  styleUrls: ['./createexpense.component.scss']
})
export class CreateexpenseComponent {
  public routes = routes;
  public selectedValue1 = ''

  selectedList1: data[] = [
    {value: 'Choose Sub Category'},
    {value: 'Fruits'},
  ];
   
  date = new Date();
 

}
