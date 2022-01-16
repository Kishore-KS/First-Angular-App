import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  memberName = "";
  numberOfTeams: number | "" = "";
  memberList: string[] = [];
  errorMessage = "";

  saveMemberName(memberName: string){
    this.memberName = memberName
    console.log(this.memberName)
  }

  addMember(){
    if(!this.memberName) {
      this.errorMessage = "Name can't be empty"
    }
    else {
      console.log("else")
    this.memberList.push(this.memberName)
    this.memberName = ""
    console.log(this.memberList)
    }
  }

  saveNumberOfTeams(numberOfTeams: string){
    this.numberOfTeams = Number(numberOfTeams)
  }

  generateTeams(){
    if(!this.numberOfTeams){
      this.errorMessage = "Number of teams can't be 0"
      return;
    }
    let teamList: string[][] = [];
    for (let members in this.memberList) {
      teamList[this.numberOfTeams--].push(members)
      console.log(teamList)
    }
  }
}
