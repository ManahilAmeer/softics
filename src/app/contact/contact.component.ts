import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formGroup = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    message : new FormControl('')

  })
  onSubmit() {
    alert('Message sent successfully! ' + this.formGroup.controls.message.value);
  }
}
