import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkTheme: boolean = true;

  constructor(private themeService: ThemeService) {
    themeService.refreshTheme$.subscribe((theme) => {
      this.darkTheme = theme == 'dark';
    });
  }

  ngOnInit(): void {
    this.darkTheme = this.themeService.getTheme() == 'dark';
  }
}
