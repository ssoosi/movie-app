import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { MovieCategoryComponent } from '../../component/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';
import Swiper from 'swiper';



@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcommingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  bannerMovie!: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise=inject(DomSanitizer);
movie: any;


  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
          console.log(this.bannerMovie)
        });
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovies = result.results;
    });
  }
    ngAfterViewInit() {
    // Initialize Swiper after the view has been initialized
    const swiper = new Swiper('.movie-categories-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}