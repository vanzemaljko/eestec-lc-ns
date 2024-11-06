import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tab: number = 0;
  theme: string = 'dark';
  displayWiki = environment.displayWiki;

  constructor(private router: Router, private themeService: ThemeService) {
    themeService.refreshTheme$.subscribe((theme) => {
      this.theme = theme;
    });

    router.events.subscribe((val) => {
      this.toggleSelectedMenuItem();
    });
  }

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();

    setTimeout(() => {
      this.toggleSelectedMenuItem();
    }, 20);
  }

  toggleSelectedMenuItem() {
    switch (this.router.url) {
      case '/about-us':
        this.tab = 1;
        break;
      case '/blog':
        this.tab = 2;
        break;
      case '/partners':
        this.tab = 3;
        break;
      case '/projects':
        this.tab = 4;
        break;
      case '/contact':
        this.tab = 5;
        break;
      default:
        this.tab = 0;
        break;
    }
  }

  switchSelectedMenuItem(tab: number) {
    this.tab = tab;
    switch (tab) {
      case 1:
        this.router.navigate(['about-us']);
        break;
      case 2:
        this.router.navigate(['blog']);
        break;
      case 3:
        this.router.navigate(['partners']);
        break;
      case 4:
        this.router.navigate(['projects']);
        break;
      case 5:
        this.router.navigate(['contact']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  switchTheme() {
    this.themeService.changeTheme(this.theme);
  }
}
