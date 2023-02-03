import {AnimalGame} from './animalGame';
import {BirdGame} from './birdGame';
import {BodyGame} from './bodyGame';
import {FruitGame} from './fruitGame';
import {NumbersGame} from './numbers';
import {VegetableGame} from './vegetableGame';

export const All = [
  ...FruitGame,
  ...AnimalGame,
  ...NumbersGame,
  ...BirdGame,
  ...BodyGame,
  ...VegetableGame,
];
