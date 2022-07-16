import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newMember: string = "";

  members: string[] = [];

  errorMessage: string = "";

  numberofTeams: number | any = "";

  teams: string[][] = [];

  addMember(): void {

    if (!this.newMember) {
      this.errorMessage = "Name can't be empty!"
      return
    }

    this.members.push(this.newMember)
    this.newMember = "";
    this.errorMessage = "";
    alert(this.members)

  }

  onInput(member: string): void {

    this.newMember = member

  }

  onTeamNumber(value: string): void {

    this.numberofTeams = Number(value)

  }

  generateTeams(): void {

    if (!this.numberofTeams || this.numberofTeams <= 0) {
      this.errorMessage = "Invalid number of teams!"
      return;
    }

    if (this.members.length < this.numberofTeams) {
      this.errorMessage = 'Not enough members!';
      return;
    }

    this.errorMessage = '';

    const allTeam : string [] = [...this.members]

    while (allTeam.length) {

      for (let i = 0; i < this.numberofTeams; i++) {

        const RandomIndex = Math.floor(Math.random() * allTeam.length)

        const member = allTeam.splice(RandomIndex, 1)[0]

        if (!member) {
          break
        }

        if (this.teams[i]) {

          this.teams[i].push(member)

        } else {

          this.teams[i] = [member]

        }

      }
    }

    console.log(this.teams)

    this.numberofTeams = ""

    this.members = []


  }


}
