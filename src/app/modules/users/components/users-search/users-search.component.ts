import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BaseComponent } from "../../../../shared";

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent extends BaseComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();

  searchTerm: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
