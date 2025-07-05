import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private router: Router) { }

  goToProjects() {
    this.router.navigateByUrl('/projects')
  }
  goToContact() {
    this.router.navigateByUrl('/contact')
  }

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

  projects = [
    {
      name: 'Red Lobster', 
      img: '/images/food.jpg', 
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack:['Angular','Firebase','Lookup'],
      linkToDemo:'',
      linkToGithub:''
    },
    {
      name: 'Mathology', 
      img: '/images/maths.jpg', 
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack:['Angular','Firebase','Lookup'],
      linkToDemo:'',
      linkToGithub:''
    },
    {
      name: 'Wood Wonders', 
      img: '/images/woodwork.jpg', 
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack:['Angular','Firebase','Lookup'],
      linkToDemo:'',
      linkToGithub:''
    },
    {
      name: 'Book your Look', 
      img: '/images/fashion.jpg', 
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack:['Angular','Firebase','Lookup'],
      linkToDemo:'',
      linkToGithub:''
    },
  ]
}
