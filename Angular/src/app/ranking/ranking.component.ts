import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { MatTableDataSource } from '@angular/material/table';

const SBUrl = "http://localhost:8080/api/public";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})

export class RankingComponent implements OnInit {
  usersOrdered!: User[];
  dataSource: any;

  constructor(private http: HttpClient) { }
/*
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }*/

  ngOnInit(): void {
    this.fetchAllUsers();
  }


  fetchAllUsers(){
    this.http.get<User[]>(`${SBUrl}/allUsersDescending`).subscribe((data)=> {
      this.usersOrdered = data;
      this.dataSource = new MatTableDataSource(this.usersOrdered);
      console.log(this.usersOrdered, this.dataSource);
    });
  }

  displayedColumns = ["count", "name", "surname", "username", "score"];
}
