import { Component, OnInit } from '@angular/core';
import { BoardMember } from 'src/app/model/boardMember';
import { BoardMemberService } from 'src/app/services/board-member.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  boardies: BoardMember[] = [];

  constructor(private boardMemberService: BoardMemberService) {}

  ngOnInit(): void {
    this.boardMemberService.getAllBoardMembers().subscribe((data) => {
      this.boardies = this.boardMemberService.convertDataToPosts(data);

      this.boardies = this.boardies.sort((a, b) => {
        if (a.position == 'Predsednik') {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
