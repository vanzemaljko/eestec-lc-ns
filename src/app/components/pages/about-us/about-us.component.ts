import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  constructor() {}

  ngOnInit(): void {}
}
