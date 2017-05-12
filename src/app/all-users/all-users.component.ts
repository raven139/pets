import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    moduleId: module.id,
    selector: 'all-users',
    templateUrl: './all-users.component.html'
})
 
export class AllUsersComponent implements OnInit {
    totalCount = 13;
    constructor() { }
 
    ngOnInit() {
    }
 
} 