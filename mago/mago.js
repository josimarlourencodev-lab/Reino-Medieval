// mago/mago.js
import { Character } from '../scripts/Character.js';

export class Mage extends Character {
  constructor() {
    super(
      'Mago',
      70,
      8,
      10,
      18,
      14,
      [
        'Ataque Relâmpago: dano 10',
        'Cura: Adiciona 5 PV ao Mago'
      ]
    );
  }
}
