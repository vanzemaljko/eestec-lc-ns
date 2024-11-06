import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private refreshActionSource = new Subject<string>();

  constructor() {}

  refreshTheme$ = this.refreshActionSource.asObservable();

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.refreshActionSource.next(theme);
  }

  getTheme(): string {
    if (localStorage.getItem('theme') != null)
      return localStorage.getItem('theme')!;
    else return 'dark';
  }
}
