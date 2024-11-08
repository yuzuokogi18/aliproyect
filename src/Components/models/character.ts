export interface ICharacter {
    id: number;
    name: string;
    image: string;
    race: string;
    gender: string;
    ki: string;  // Renombrado de base_ki a ki
    maxKi: string; 
    affiliation: string;
    description: string;
    transformations: ITransformation[];
}

export interface ITransformation {
    name: string;
}
