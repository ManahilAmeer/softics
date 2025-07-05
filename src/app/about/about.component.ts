import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
skills = [
    { name: 'Angular', icon: '/icons/angular.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'HTML', icon: '/icons/html5.svg' },
    { name: 'CSS', icon: '/icons/css.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'XML', icon: '/icons/xml.svg' },
    { name: 'MuleSoft', icon: '/icons/mulesoft.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' }
  ];
}
