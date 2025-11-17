import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  features = [
    {
      icon: 'timeline',
      title: 'Trend Analysis',
      description: 'Visualize historical weather data to understand temporal trends.'
    },
    {
      icon: 'compare_arrows',
      title: 'Station Comparison',
      description: 'Compare multiple weather stations to spot patterns and differences.'
    },
    {
      icon: 'insights',
      title: 'Machine Learning Models',
      description: 'Run SVM, Random Forest, and other ML models to predict weather events.'
    },
    {
      icon: 'warning',
      title: 'Extreme Weather Detection',
      description: 'Identify and analyze extreme weather events quickly.'
    },
    {
      icon: 'calendar_today',
      title: 'Seasonal Variation',
      description: 'Understand seasonal changes and their impact on weather metrics.'
    },
    {
      icon: 'analytics',
      title: 'Correlation Analysis',
      description: 'Check correlations between rainfall and other environmental variables.'
    }
  ];

}
