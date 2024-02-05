import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'rhurpor2304'
  isLoggedIn = false // <- esta funcionando como un state
  favGame = ''

  getFavorite(gameName: string){
    this.favGame = gameName
  }

  greet(){
    alert("Esto es una alerta, un alerton!")
  }
}
