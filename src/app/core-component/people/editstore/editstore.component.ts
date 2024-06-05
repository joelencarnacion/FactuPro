import { Component } from '@angular/core';

@Component({
  selector: 'app-editstore',
  templateUrl: './editstore.component.html',
  styleUrls: ['./editstore.component.scss'],
})
export class EditstoreComponent {
  password = 'password';
  show = false;
  removeClass = true;
  
  removeBtn(){
    this.removeClass = !this.removeClass
  }
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
