import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName ='';
  members: string[] = [];
  errorMessage ='';
  numberOfWorkers: number | '' = '';
  workers: string[] []= [[]]
  
  onInput(value: string) {
    this.newMemberName= value;
  }

  onNumberOfWorkersInput(value: string){
    this.numberOfWorkers = Number(value);
  }

  addMember() {

    if( !this.newMemberName.length){
      this.errorMessage = "Name can't be empty";
      return;

    }
    this.errorMessage ='';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    
  }
  
  generateWorkers() {
   this.workers = [];
    if( !this.numberOfWorkers || this.numberOfWorkers <= 0){
      this.errorMessage = 'Invalid number of workers '
      return
    }

    if(this.members.length < this.numberOfWorkers){
      this.errorMessage = "Not enough members"
    }

    this.errorMessage = '';
    const allMembers =[...this.members];

while (allMembers.length )
    for( let i = 0; i < this.numberOfWorkers; i++){
     const randomIndex = Math.floor(Math.random() * allMembers.length);
     const member = allMembers.splice(randomIndex, 1)[0];

// if( !member) break; 

     if(this.workers[i]){
      this.workers[i].push(member)
     } else {
      this.workers[i] = [member]
     }
    }
  }
}
