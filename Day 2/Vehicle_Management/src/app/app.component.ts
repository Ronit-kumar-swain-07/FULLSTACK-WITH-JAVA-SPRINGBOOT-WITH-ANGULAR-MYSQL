import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vehicle_Management';
  name = 'A';
  age=25;
  col='red';
  hiddenflag=false;
  // colors = ['red', 'blue', 'green', 'black'];
  // index=0;
  // ToggleColour() {
  //   this.col = this.colors[this.index];

  //   this.index++;

  //   if (this.index >= this.colors.length) {
  //     this.index = 0;
  //   }
  // }
  ToggleColour() {
    
  }
  ChangeColour() {
    this.col='blue'
  }
  ChangeTextColour() {
    document.body.style.color="green";
  }
  myColourChangeMethod() {
    alert("My method hit and colour is changing.");
  }
  myColourChangeCheckMethod(color:string) {
    if(color === 'blue') {
      alert("This is Blue")
    }
    else if(color === 'red') {
      alert("This is Red")
    }
    else {
      alert("Other Colours")
    }
  }

  country = '';
  boxColor = 'white';

  showColor() {

    if (this.country == 'india') {
      this.boxColor = 'orange';
    }

    else if (this.country == 'pakistan') {
      this.boxColor = 'green';
    }

    else if (this.country == 'china') {
      this.boxColor = 'red';
    }

    else {
      this.boxColor = 'white';
    }
}
uid='';
pass='';
message='';
alertColor='';
Validate() {
  if(this.uid =='india' && this.pass =='bharat') {
    this.message= 'Login Succesful';
    this.alertColor='green'; 
  }
  else {
    this.message='Login Failed';
    this.alertColor='red';
  }
}
}
