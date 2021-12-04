import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { UserEntityManager, UserModel } from "../../../../data-layer";
import { NzTableQueryParams } from "ng-zorro-antd/table";

@Component({
  selector: 'users-results',
  templateUrl: './users-results.component.html',
  styleUrls: ['./users-results.component.scss']
})
export class UsersResultsComponent implements OnChanges {
  @Input() searchTerm: string;

  total = 1;

  listOfUsers: UserModel[] = [];

  loading = true;

  pageSize = 9;

  pageIndex = 1;

  constructor(private userEntityManager: UserEntityManager) {}

  ngOnChanges(changes: SimpleChanges) {
    const searchTermInput = changes.searchTerm;

    if(!searchTermInput.firstChange && (searchTermInput.currentValue !== searchTermInput.previousValue)) {
      this.loadDataFromServer();
    }
  }

  loadDataFromServer(): void {
    this.loading = true;
    this.userEntityManager.getUsers({ page: this.pageIndex, per_page: this.pageSize, q: this.searchTerm })
      .subscribe(data => {
        this.loading = false;
        this.total = data.totalCount;
        this.listOfUsers = data.items;
      });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    // Due to the fact that Github API does not support sort by 'login', only by: numbers of 'followers' or 'repositories',
    // implementation of sort by 'login' must be delayed because it does not have sense to mix server-side pagination
    // with client-side sorting. Github API doc: https://docs.github.com/en/rest/reference/search#search-users
    const { pageSize, pageIndex } = params;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    this.loadDataFromServer();
  }
}
