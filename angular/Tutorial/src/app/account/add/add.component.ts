import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name: string = '';

  onSubmit() {
    // Handle form submission here
    console.log('Account Name:', this.name);
  }

}