import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember = '';
  memberList: string[] = [];

  newMemberName(newMember: string){
    this.newMember = newMember
    console.log(this.newMember)
  }
}
