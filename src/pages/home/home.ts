import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plants = [];
  tabspage = TabsPage;

  constructor(public navCtrl: NavController) {

    this.plants.push({
        'name'  : 'Afelandra',
        'idade' : '4 dias',
        'water' : 0,
        'sun': 1,
        'percentage' : 0,
        'happy' : 0,
        'bg' : 'bg2.jpg'
    });

    this.plants.push({
        'name'  : 'Acerola',
        'idade' : '1 mês',
        'water' : 1,
        'sun': 0,
        'percentage' : 0,
        'happy' : 0,
        'bg' : 'bgplant1.jpg'
    });

      this.plants.push({
          'name'  : 'Laranjinha',
          'idade' : '1 mês',
          'water' : 1,
          'sun': 0,
          'percentage' : 0,
          'happy' : 0,
          'bg' : 'bgplant1.jpg'
      });

      this.plants.push({
          'name'  : 'Amarelinha',
          'idade' : '4 meses',
          'water' : 0,
          'sun': 1,
          'percentage' : 1,
          'happy' : 1,
          'bg' : 'bg2.jpg'
      });



      this.plants.push({
          'name'  : 'Antúrio',
          'idade' : '5 meses',
          'water' : 1,
          'sun': 1,
          'percentage' : 1,
          'happy' : 1,
          'bg' : 'bg4.png'
      });

      this.plants.push({
          'name'  : 'Arbusto-borboleta',
          'idade' : '7 meses',
          'water' : 1,
          'sun': 0,
          'percentage' : 0,
          'happy' : 0,
          'bg' : 'bg3.png'
      });

      this.plants.push({
          'name'  : 'Abélia',
          'idade' : '1 mês',
          'water' : 1,
          'sun': 0,
          'percentage' : 1,
          'happy' : 1,
          'bg' : 'bg2.jpg'
      });
  }

    public changePage($page){
        this.navCtrl.push($page,{});
    }
}
