import { Component, Input } from '@angular/core';
import { Partner } from 'src/app/model/partner';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent {
  @Input() partner: Partner = new Partner();
  theme: string = 'dark';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
    themeService.refreshTheme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
