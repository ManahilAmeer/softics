import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this._theme.asObservable();

  setTheme(theme: 'light' | 'dark') {
    this._theme.next(theme);
    document.body.classList.remove('light', 'dark', 'light-theme', 'dark-theme');
    document.body.classList.add(theme, `${theme}-theme`);
  }

  get currentTheme() {
    return this._theme.value;
  }
}
