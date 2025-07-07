import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedCounterComponent } from "../animated-counter/animated-counter.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AnimatedCounterComponent],
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
      techStack: ['Angular', 'Firebase', 'Lookup'],
      linkToDemo: '',
      linkToGithub: ''
    },
    {
      name: 'Mathology',
      img: '/images/maths.jpg',
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack: ['Angular', 'Firebase', 'Lookup'],
      linkToDemo: '',
      linkToGithub: ''
    },
    {
      name: 'Wood Wonders',
      img: '/images/woodwork.jpg',
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack: ['Angular', 'Firebase', 'Lookup'],
      linkToDemo: '',
      linkToGithub: ''
    },
    {
      name: 'Book your Look',
      img: '/images/fashion.jpg',
      description: 'An Angular-based e-commerce platform with product filtering and cart functionality.',
      techStack: ['Angular', 'Firebase', 'Lookup'],
      linkToDemo: '',
      linkToGithub: ''
    },
  ]

  services = [
    {
      name: 'I have an app idea',
      description: 'I need to transform my vision into a market-ready product.',
      icon: 'icons/idea.svg'
    },
    {
      name: 'I naeed a team',
      description: 'I want to hire top-tier developers for my project.',
      icon: 'icons/team.svg'
    },
    {
      name: 'I need to optomize my app',
      description: 'I want to optimize and maintain my app for peak performance.',
      icon: 'icons/website.svg'
    }
  ]

  numbersToShow = [
    {
    name: 'Years of Experience',
    endVal: 8,
    suffix: '+'
  },
    {
    name: 'Satisfied Clients',
    endVal: 3560,
    suffix: '+'
  },
    {
    name: 'Industries Served',
    endVal: 15,
    suffix: '+'
  },
    {
    name: 'Customer Satisfaction',
    endVal: 90,
    suffix: '%'
  },
  ]
}
