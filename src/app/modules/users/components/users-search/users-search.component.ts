import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
