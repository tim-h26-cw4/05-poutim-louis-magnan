export default class Chef {
  constructor(chef) {
    this.element = chef;
    this.chef = [];
    this.choix = this.element.querySelector('.js-final-choix');
    this.init();
  }
  init() {}
}
