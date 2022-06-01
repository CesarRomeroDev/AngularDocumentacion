import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';                     //interfaz tipo Hero
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

/**
 * @Component
 * Decorador que marca una clase como un componente Angular y proporciona
 * metadatos de configuración que determinan cómo se debe procesar, crear
 * instancias y usar el componente en tiempo de ejecución.
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) { }

  ngOnInit(): void {    // gancho de ciclo de vida
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
