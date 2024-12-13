import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class loginPage {
  loginData = {
    email: '',
    password: ''
  };
  rememberMe = false;

  constructor(private alertController: AlertController) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión',
      subHeader: 'Información',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentPasswordRecoveryAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      subHeader: 'Te enviaremos un correo de recuperacion',
      inputs: [
        {
          name: 'user_email',
          type: 'email',
          placeholder: 'tucorreo@gmail.com'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: (alertData) => {
            if (alertData.user_email) {
              console.log('Correo enviado a:', alertData.user_email);
              this.presentAlert('Correo enviado. Revisa tu bandeja de entrada.');
            } else {
              this.presentAlert('Por favor ingresa un correo válido.');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  onLogin() {
    const userRegistered = false;
    const credentialsCorrect = false;

    if (!this.loginData.email || !this.loginData.password) {
      this.presentAlert('Por favor, completa todos los campos.');
    } else if (!userRegistered) {
      this.presentAlert('La cuenta no está registrada. Por favor, verifica o regístrate.');
    } else if (!credentialsCorrect) {
      this.presentAlert('Los datos ingresados son incorrectos. Intenta nuevamente.');
    } else {
      this.presentAlert('Inicio de sesión exitoso. Bienvenido.');

      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.loginData.email);
      }
    }
  }

  ngOnInit() {

    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      this.loginData.email = savedEmail;
      this.rememberMe = true;
    }
  }
}
