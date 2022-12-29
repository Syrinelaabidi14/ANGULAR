import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/article';



@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
public titre:string;
public listearticle : Emploi[];
  constructor() { 
    this.titre='Les articles du jour';
    this.listearticle=[
      {
        reference: '',
      titre:'',
      entreprise:'',
      etat:true,
      categorie:'sport',
       }
    ]}
 

  ngOnInit(): void {{ this.listearticle=[
    {
      reference: 'asdsd1556---552',
    titre:'Le championnat du monde',
    entreprise:'1/1/2020',
    etat:true,
    categorie:'travail',
     },
     {
      reference: 'sd5f2d6f26d**df5',
    titre:'Le championnat du monde',
    entreprise:'14/01/2023',
    categorie:'sport',
    etat:true,
     }

]}
}
color(article:Emploi){

let i = this.listearticle.indexOf(article);
if (article.categorie[i]=='education'){
  
}
}
}




