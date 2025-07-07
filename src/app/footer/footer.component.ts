import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  contactNumber: String = '+1 (305) 506-4484'
  contactEmail: String = 'info@softics.com'

  listOfLinks: any = [
    { 
      name: 'QuickLinks', 
      list: [
        { itemName: 'Home', itemLink: '' }, 
        { itemName: 'About Us', itemLink: '' }
      ] 
    },
    { 
      name: 'Services', 
      list: [
        { itemName: 'API development', itemLink: '' }, 
        { itemName: 'Arcitechture', itemLink: '' },
        { itemName: 'Custom Web Development', itemLink: '' },
        { itemName: 'Form Development', itemLink: '' },
        { itemName: 'Smart AI Integration', itemLink: '' }
      ] 
    },
    { 
      name: 'Resources', 
      list: [
        { itemName: 'Testimonials', itemLink: '' }, 
        { itemName: 'Company Profile', itemLink: '' },
        { itemName: 'Blogs', itemLink: '' },
        { itemName: 'Careers', itemLink: '' },
        { itemName: 'Case studies', itemLink: '' }
      ] 
    },
    { 
      name: 'Legal', 
      list: [
        { itemName: 'Privacy Policy', itemLink: '' }, 
        { itemName: 'Terms and Conditions', itemLink: '' }
      ] 
    },
  ]

  version: string = '';

  constructor(private http: HttpClient) {
    this.http.get<{ version: string }>('/version.json')
      .subscribe(data => {
        console.log("data",data);
        
        this.version = data.version;
      });
  }
}
