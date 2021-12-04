import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  searchTerm: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(searchTerm: string): void {
   this.searchTerm = searchTerm;
  }
}
