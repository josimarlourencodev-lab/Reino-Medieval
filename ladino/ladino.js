// ladino/ladino.js
import { Character } from '../scripts/Character.js';

export class Rogue extends Character {
  constructor() {
    super(
      'Ladino',
      80,
      12,
      18,
      14,
      10,
      [
        'Ataque Furtivo: um golpe de faca (dano 4)',
        'Roubo: retira 2 PV do oponente e adiciona ao seu'
      ]
    );
  }
}
