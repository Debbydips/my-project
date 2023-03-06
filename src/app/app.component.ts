import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName ='';
  members: string[] =[];
  errorMessage ='';
  numberOfWorkers: number | '' = ''
  
  
  onInput(member: string) {
    this.newMemberName= member;
  }

  onNumberOfWorkersInput(value: string){
    this.numberOfWorkers = Number(value);
  }

  addMember() {

    if( !this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;

    }

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    
  
  }
  
  generateWorkers() {

    if( !this.numberOfWorkers || this.numberOfWorkers <=0){
      return
    }

    const allMembers =[...this.members]

    for( let i = 0; i < this.numberOfWorkers; i++){
     const randomIndex = Math.floor(Math.random () * allMembers.length);
    }
     console.log(randomIndex);
  }
}
