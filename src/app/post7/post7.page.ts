import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post7',
  templateUrl: './post7.page.html',
  styleUrls: ['./post7.page.scss'],
})
export class Post7Page {
  rating: number = 0;
  videoUrl: string = ''; 
  safeVideoUrl!: SafeResourceUrl;

//Comentarios
  comments: { username: string; userIcon: string; text: string }[] = [];
  newCommentText: string = '';

  constructor(private navCtrl: NavController, public sanitizer: DomSanitizer) {
    this.setVideoUrl('BFwGqLa_oAo'); //ID de video
  }

  goBack() {
    this.navCtrl.back();
  }

  rateMovie(stars: number) {
    this.rating = stars;
  }

  setVideoUrl(videoId: string) {
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

//Agregar un nuevo comentario
  addComment() {
    if (this.newCommentText.trim()) {
      this.comments.push({
        username: 'Usuario',
        userIcon: 'assets/icon/usericon.png',
        text: this.newCommentText,
      });
      this.newCommentText = '';
    }
  }
}

