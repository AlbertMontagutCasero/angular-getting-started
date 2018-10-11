import {Component, OnInit} from '@angular/core';
import {Hero} from '../Model/hero';
import {HEROES} from '../Model/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Array<Hero> = HEROES;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
