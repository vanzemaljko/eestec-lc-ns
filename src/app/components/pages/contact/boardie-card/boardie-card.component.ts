import { Component, Input } from '@angular/core';
import { BoardMember } from 'src/app/model/boardMember';

@Component({
  selector: 'boardie-card',
  templateUrl: './boardie-card.component.html',
  styleUrls: ['./boardie-card.component.scss'],
})
export class BoardieCardComponent {
  @Input() boardie: BoardMember = new BoardMember();
}
