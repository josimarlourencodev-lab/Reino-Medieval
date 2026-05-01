// scripts/Character.js
export class Character {
  constructor(name, health, strength, dexterity, intelligence, wisdom, skills) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.skills = skills;
  }

  renderStats(container) {
    container.innerHTML = `
      <div class="stat"><span>Vida:</span> ${this.health}</div>
      <div class="stat"><span>Força:</span> ${this.strength}</div>
      <div class="stat"><span>Destreza:</span> ${this.dexterity}</div>
      <div class="stat"><span>Inteligência:</span> ${this.intelligence}</div>
      <div class="stat"><span>Sabedoria:</span> ${this.wisdom}</div>
    `;
  }

  renderSkills(container) {
    container.innerHTML = this.skills
      .map(skill => `<li class="skill">${skill}</li>`)
      .join('');
  }
}