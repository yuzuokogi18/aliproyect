import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/character';
import { CharactersService } from '../services/charactersservice.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2'; 
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
      console.log(response); 
      this.characters = response.items.map(character => {
        return { ...character, showDescription: false };
      });
      this.meta = response.meta;
      this.links = response.links;
      this.currentPage = page;
    });
  }

  showDescription(character: ICharacter): void {
    
    this.charactersService.getCharacterDetails(character.id).subscribe((detailedCharacter) => {
      console.log('Character with transformations:', detailedCharacter);

      Swal.fire({
        title: `Detalles de ${detailedCharacter.name}`,
        html: `
          <h4>Descripción Completa</h4>
          <pre style="white-space: pre-wrap; font-size: 12px;">${JSON.stringify(detailedCharacter, null, 2)}</pre>
        `,
        confirmButtonText: 'Cerrar'
      });
    });
  }

  parseKi(ki: string): string {
    if (ki) {
      return ki.replace(/\./g, ',');
    }
    return 'No disponible';
  }
}