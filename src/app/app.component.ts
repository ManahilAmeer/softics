// src/app/app.component.ts
import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'app-root',
  standalone: true, // Make this standalone
  imports: [CommonModule, RouterOutlet, NavbarComponent, MatButtonToggleModule], // Add navbar here
  templateUrl: './app.component.html',
  // styleUrl : './app.component.scss'
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private renderer: Renderer2) { }
  title = 'Softics';

  toggleTheme(theme: string) {
    const body = document.body;
    this.renderer.removeClass(body, 'light-theme');
    this.renderer.removeClass(body, 'dark-theme');
    this.renderer.addClass(body, `${theme}-theme`);
  }
}
