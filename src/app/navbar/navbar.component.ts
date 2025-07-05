import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  standalone: true, // Make this standalone
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  isDarkMode: Boolean = false;
  constructor(private themeService: ThemeService, private router: Router) { }
  theme: any;
  @Output() themeChange = new EventEmitter<string>();
  toggleTheme() {
    const newTheme = this.themeService.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.theme = this.themeService.currentTheme
  }
  navLinks = [
    { names: "Home", href: "home", clicked: true },
    { names: "Services", clicked: false, route: '/services' },
    { names: "Resources", href: "projects", clicked: false },
    { names: "Careers", href: "contact", clicked: false },
    { names: "Case Studies", href: "contact", clicked: false },
    { names: "About", href: "about", clicked: false },
    { names: "Contact", href: "contact", clicked: false }
  ]
  selectNavLink(navLink: any) {
    this.navLinks.forEach(link => link.clicked = false); // reset all
    navLink.clicked = true; // activate clicked one
    if (navLink.route) {
      this.router.navigate([navLink.route]);
    } else if (navLink.href) {
      // console.log("navLink.href",navLink.href ,document.getElementById(navLink.href))
      document.getElementById(navLink.href)?.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
