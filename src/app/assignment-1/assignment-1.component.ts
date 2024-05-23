import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-assignment-1',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatDividerModule],
  templateUrl: './assignment-1.component.html',
  styleUrl: './assignment-1.component.css'
})
export class Assignment1Component {

}
