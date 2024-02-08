import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {
  @ViewChild('userForm', { static: false }) userForm!: ElementRef;

  name: string = '';
  email: string = '';
  phone: string = '';
  photo: string | ArrayBuffer | null = null;
  content: string = '';

  
  photoPreview: string | ArrayBuffer | null = null;

  
  onSubmit() {
    console.log('Form submitted!', this.userForm);
    
  }

  
  onPhotoChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }

  
  handleFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.photo = e.target?.result || null;
    };

    reader.readAsDataURL(file);
  }
}
