import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule instead of NgModel
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // <-- Correct way to use NgModel
    RouterLink,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'] // <-- Fixed typo
})
export class About {

  team = [
    {
      name: 'Nusrhat Jahan Sarker',
      role: 'Lecturer',
      description: 'Department of Computer Science & Engineering Daffodil Institute of IT (DIIT)',
      icon: 'person'
    },
    {
      name: 'Saiful Islam',
      role: 'Registration No. 19502004912',
      description: 'Session: 2019 - 2020',
      icon: 'developer_mode'
    },
    {
      name: 'MD Sulaiman Hossain Shanto',
      role: 'Registration No. 19502004924',
      description: 'Session: 2019 - 2020',
      icon: 'smart_toy'
    }
  ];

}
