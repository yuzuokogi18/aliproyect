export interface ICharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet?: {
      name: string;
      description: string;
      image: string;
      isDestroyed: boolean;
    };
    transformations?: {
      name: string;
      ki: string;
      image: string;
    }[];
    showDescription?: boolean;
  }
  