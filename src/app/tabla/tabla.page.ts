import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonInput } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonInput]
})
export class TablaPage implements OnInit {

  constructor() { }

  TablaN : number = 0;

  tabla=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  ngOnInit() {
  }

}
