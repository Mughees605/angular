import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name:string ='';
  allowTruthy:boolean = false;
  text:string = "No server found";
  serverArray = ["first","second"];
  serverCreated = false
  constructor() {
     setTimeout(()=>{
       this.allowTruthy = true
     },2000)
   }
  onServerFound(){
    this.serverArray.push(this.name);
    this.serverCreated = true;
  }

  ngOnInit() {
  }

}
