import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonInput]
})
export class PromedioPage implements OnInit {

  constructor() { }

  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  resultado: string = "";

  promedio(){
    const maximoN = Math.max(this.numero1,this.numero2,this.numero3);
    const minimoN = Math.min(this.numero1,this.numero2,this.numero3);
    const promedio = (Number(this.numero1) + Number(this.numero2) + Number(this.numero3))/3;

    this.resultado = `Menor: ${minimoN} Mayor ${maximoN} Promedio ${promedio.toString()}`
  }


  ngOnInit() {
  }

}
