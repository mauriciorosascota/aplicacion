import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  registerData = {
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private alertController: AlertController) {}

  async onRegister() {
    if (!this.registerData.username || !this.registerData.phone || !this.registerData.email || !this.registerData.password || !this.registerData.confirmPassword) {
      await this.showAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      await this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    console.log('Datos enviados:', this.registerData);
    await this.showAlert('Éxito', 'Registro completado con éxito.');
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}


