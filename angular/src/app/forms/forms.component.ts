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
  photo: string | ArrayBuffer | null = null; // To store the data URL of the photo
  content: string = '';

  // To store the preview of the selected photo
  photoPreview: string | ArrayBuffer | null = null;

  // Accessing form values or methods if needed
  onSubmit() {
    console.log('Form submitted!', this.userForm);
    // Additional logic or actions after form submission
  }

  // Handle photo change event
  onPhotoChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }

  // Convert file to data URL and set the preview
  handleFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.photo = e.target?.result || null;
    };

    reader.readAsDataURL(file);
  }
}
