// guerreiro/guerreiro.js
import { Character } from '../scripts/Character.js';

export class Warrior extends Character {
  constructor() {
    super(
      'Guerreiro',
      100,
      18,
      12,
      8,
      10,
      [
        'Ataque Duplo: dois golpes de espada (dano 10)',
        'Investida de socos: quatro socos (dano 8)'
      ]
    );
  }
}