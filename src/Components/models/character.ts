export interface ICharacter {
    id: number;
    name: string;
    image: string;
    race: string;
    gender: string;
    base_ki: number;
    total_ki: number;
    description: string;
    transformations: ITransformation[];
  }
  
  export interface ITransformation {
    name: string;
  }
  