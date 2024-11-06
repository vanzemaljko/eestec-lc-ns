import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import {BoardMember} from 'src/app/model/boardMember'

@Injectable({
  providedIn: 'root'
})
export class BoardMemberService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  getAllBoardMembers() {
    const promise = this.client.getEntries({
      content_type: 'boardMember',
    });
    return from(promise);
  }

  convertDataToPosts(data: any): BoardMember[] {
    let retVal: BoardMember[] = [];
    for (let item of data.items) {
      let boardie: BoardMember = new BoardMember();
      boardie.name = item.fields.name;
      boardie.position = item.fields.position;
      boardie.email = item.fields.email;
      boardie.linkedIn = item.fields.linkedIn;      
      boardie.picture = item.fields.picture;

      retVal.push(boardie);
    }

    return retVal;
  }
}
