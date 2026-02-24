import Poutine from './Poutine.js';
export default class Chef {
  constructor(chef) {
    this.element = chef;
    this.chef = [];
    this.choix = this.element.querySelector('.js-final-choix');
    this.init();
  }
  init() {
    const chefs = this.element.querySelectorAll('.js-choix-poutine');
    const btnCommander = this.element.querySelector('.js-passer-commande');
    btnCommander.addEventListener('click', this.sendOder.bind(this));
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      const instance = new Poutine(chef);

      this.chef.push(instance);
    }
  }
  sendOder() {
    let nombrePoutine = 0;
    for (let i = 0; i < this.chef.length; i++) {
      const poutine = this.chef[i];

      if (poutine.selectedType.length > 0) {
        nombrePoutine += 1;
      }
    }
    const p = document.createElement('p');
    p.innerText = ` Nombre total de poutine(s) :  ${nombrePoutine}`;
    this.choix.innerHTML = '';
    this.choix.appendChild(p);
  }
}
