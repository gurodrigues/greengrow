import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  homepage = HomePage;

  constructor(public navCtrl: NavController) {

  }

  public changePage($page){
      this.navCtrl.push($page,{});
  }

}
