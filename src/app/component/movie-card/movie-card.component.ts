import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie! :Movie;
  tmdbConfig=tmdbConfig;

  constructor(private router: Router) {}

  viewMovies() {
    // Storing selected movie in localStorage
    localStorage.setItem('selectedMovie', JSON.stringify(this.movie));
    
    // Navigating to the details page
    this.router.navigate(['/movie-details']);
  }
}


