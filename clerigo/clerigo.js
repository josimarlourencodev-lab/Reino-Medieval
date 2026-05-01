// clerigo/clerigo.js
import { Character } from '../scripts/Character.js';

export class Cleric extends Character {
  constructor() {
    super(
      'Clérigo',
      90,
      10,
      10,
      12,
      18,
      [
        'Lança do Destino: dano 10',
        'Círculo de Proteção: reduz dano pela metade (3 rodadas)'
      ]
    );
  }
}