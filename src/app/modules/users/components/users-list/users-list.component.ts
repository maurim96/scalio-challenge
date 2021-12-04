import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../../../shared";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent extends BaseComponent implements OnInit {
  searchTerm: string = 'default';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit(searchTerm: string): void {
   this.searchTerm = searchTerm;
  }
}
