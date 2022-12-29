import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/article';
@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
public listemploi : Emploi[];
  constructor() { this.listemploi=[
    {
      reference: '',
    titre:'',
    entreprise:'',
    etat:true,
    categorie:'',
     }
  ]}

  ngOnInit(): void { { this.listemploi=[
    {
      reference: 'asdsd1556---552',
    titre:'Ingénieur dev',
    entreprise:'sagemcom',
    etat:true,
    categorie:'',
     },
     {
      reference: 'sd5f2d6f26d**df5',
    titre:'Ingénieur DEVOPS',
    entreprise:'sofrecom',
    etat:true,
    categorie:'',
     },
     {
      reference: 'fdds5652fds-//dfsdsf2',
    titre:'Ingénieur DATA SCIENCE',
    entreprise:'EY',
    etat:false,
    categorie:'',
     },
     {
      reference: 'fdds5652fds-//dfsdsf2',
    titre:'FULL STACK DEVELOPER',
    entreprise:'GOOGLE',
    etat:false,
    categorie:'',
     },
     {
      reference: 'fdds5652fds-//dfsdsf2',
    titre:'BI DEVELOPER',
    entreprise:'EY',
    etat:true,
    categorie:'',
     }
  ]}
  }

}
