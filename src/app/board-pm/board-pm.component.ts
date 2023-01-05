import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-pm',
  templateUrl: './board-pm.component.html',
  styleUrls: ['./board-pm.component.css']
})
export class BoardPmComponent implements OnInit{
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPmBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
