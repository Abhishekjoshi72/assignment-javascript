import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReactiveFormsModule, RouterModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  assignmentList: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.assignmentList = [
      {
        id: 1,
        name: 'Assignment 1'
      },
      {
        id: 2,
        name: 'Assignment 2'
      },
      {
        id: 3,
        name: 'Assignment 3'
      },
      {
        id: 4,
        name: 'Assignment 4'
      },
      {
        id: 5,
        name: 'Assignment 5'
      },
    ]
  }

  assignmentClick(id: any) {
    console.log('ID: ', id);
    switch (id) {
      case 1:
        this.router.navigate(['/dashboard/assignment_1']);
        break;

      case 2:
        this.router.navigate(['/dashboard/assignment_2']);
        break;

      case 3:
        this.router.navigate(['/dashboard/assignment_3']);
        break;

      case 4:
        this.router.navigate(['/dashboard/assignment_4']);
        break;

      case 5:
        this.router.navigate(['/dashboard/assignment_5']);
        break;

      default:
        break;
    }
  }
}
