// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component'; // Import the navbar

// Make sure AppComponent is standalone
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
