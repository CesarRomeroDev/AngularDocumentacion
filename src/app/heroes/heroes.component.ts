import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';                     //interfaz tipo Hero
import { HeroService } from '../hero.service';

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


  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {    // gancho de ciclo de vida
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
