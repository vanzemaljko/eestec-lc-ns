import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Partner } from 'src/app/model/partner';
import { PartnerService } from 'src/app/services/partner.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss'],
})
export class PartnerPageComponent implements OnInit {
  public partner: Partner = new Partner();
  theme: string = 'dark';

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private partnerService: PartnerService,
    private title: Title,
    private themeService: ThemeService
  ) {
    themeService.refreshTheme$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.partnerService.getPartnerById(id).subscribe(
        (data) => {
          this.partner = this.partnerService.convertDataToPartner(data);
          this.title.setTitle(this.partner.name + ' - EESTEC LC Novi Sad');
        },
        (err) => {
          this.router.navigate(['404']);
        }
      );
    });
  }

  returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
