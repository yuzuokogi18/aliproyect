import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/character';
import { CharactersService } from '../services/charactersservice.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-charactercart-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './charactercart-component.component.html',
  styleUrls: ['./charactercart-component.component.css']
})
export class CharacterCartComponentComponent implements OnInit {
  characters: ICharacter[] = [];
  meta: any;
  links: any;
  currentPage: number = 1;
  limit: number = 10;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.charactersService.getCharacters(page, this.limit).subscribe((response) => {
      this.characters = response.items;
      this.meta = response.meta;
      this.links = response.links;
      this.currentPage = page;
    });
  }
}