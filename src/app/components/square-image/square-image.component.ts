import { Component, Input } from '@angular/core';

@Component({
  selector: 'square-image',
  templateUrl: './square-image.component.html',
  styleUrls: ['./square-image.component.scss'],
})
export class SquareImageComponent {
  @Input() imgSrc = '';
}
