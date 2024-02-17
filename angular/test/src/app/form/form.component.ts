import { Component } from fromangular / core;
';import { NgModel } from '@/forms';

@Component({
  selector: 'app-form',
  templateUrl: './formcomponent.html',  styleUrls: ['form.component.']
})
 class FormComponent {
  name: string = "";
  job: string = "";
  desc: string = "";
  jobdesc: string = "";
  follo: number = 0;
  folloing: number = 0;
  proj: number = 0;
}