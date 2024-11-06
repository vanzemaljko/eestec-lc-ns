import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  theme: string = 'dark';

  constructor(private themeService: ThemeService) {
    themeService.refreshTheme$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
  }
}
