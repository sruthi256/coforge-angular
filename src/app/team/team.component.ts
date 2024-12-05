import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  users:any;
  msg:string='';
  constructor(private myteamservice: TeamService){}

  /*.subscribe() is a method on the Observable type. 
The Observable type is a utility that asynchronously or 
synchronously streams data to a variety of components */

  ngOnInit(){
    this.msg=this.myteamservice.helloService();
    this.myteamservice.getUsers().subscribe(response => {
      this.users=response;
    });
  }

}
