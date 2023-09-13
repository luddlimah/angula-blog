import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://miro.medium.com/v2/resize:fit:1358/1*e2FuduoxHgHTGP0kJMBWUw.png";
  contentTitle: string = "O QUE É ANGULAR";
  contentDescription: string = "Quando falamos de Angular, geralmente estamos falando do framework, mas nem sempre é assim. Angular é um ecossistema completo, uma plataforma de desenvolvimento que inclui o framework e bibliotecas próprias, tendo em mente as necessidades comuns do desenvolvimento de interfaces e ferramentas para testar, atualizar e fazer o build do projeto.Como framework, Angular é baseado em componentes, que são trechos de código reutilizáveis escritos em HTML, TypeScript e CSS. Geralmente representam um elemento da interface. Podem ser testados, usando frameworks como Jest e Jasmine, sendo o último o padrão em projetos Angular gerados pela CLI.";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }

}
