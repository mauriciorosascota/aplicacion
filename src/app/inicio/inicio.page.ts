import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  searchTerm: string = '';

  //lista de peliculas 
  movies = [
    { title: 'DRIVE', route: '/pelicula-drive' },
    { title: 'INCEPTION', route: '/pelicula-inception' },
    { title: 'INTERSTELLAR', route: '/pelicula-interstellar' },
    { title: 'LA LA LAND', route: '/pelicula-La La Land' },
    { title: 'CRAZY, STUPID, LOVE.', route: '/pelicula-Crazy, Stupid, Love.' },
    { title: 'OPPENHEIMER', route: '/pelicula-Oppenheimer' },
    { title: 'THE PIANIST', route: '/pelicula-The Pianist' },
    { title: 'SOUND OF METAL', route: '/pelicula-Sound Of Metal' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  searchMovie() {
    const movie = this.movies.find(
      (m) => m.title.toLowerCase() === this.searchTerm.toLowerCase().trim()
    );
    if (movie) {
      this.navCtrl.navigateForward(movie.route);
    }
  }

  navigateToMovie(route: string) {
    this.navCtrl.navigateForward(route);
  }
}


