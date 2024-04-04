import { Component , inject} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  selectedMovie: any;
  title: any;
  date: any;
  imagepath: any;
  description: any;
  tmdbConfig = tmdbConfig;
  public domSanitise=inject(DomSanitizer);
  ngOnInit() {

    
    const storedMovie = localStorage.getItem('selectedMovie');
    if (storedMovie) {
      // Parse the stored movie data from string to object
      this.selectedMovie = JSON.parse(storedMovie);
      this.title= this.selectedMovie.original_title
      this.date= this.selectedMovie.release_date
      this.imagepath= this.selectedMovie.poster_path
      this.description= this.selectedMovie.overview
      
    }
    // Scroll down the page
    window.scrollTo(0, document.body.scrollHeight);
  }
}
