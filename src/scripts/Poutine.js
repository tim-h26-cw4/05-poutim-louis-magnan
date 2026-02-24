export default class Poutine {
  constructor(chef) {
    this.element = chef;
    this.btnPoutines = this.element.querySelectorAll('.js-btn-poutine');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.btnPoutines.length; i++) {
      const btnPoutine = this.btnPoutines[i];
      btnPoutine.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    for (let i = 0; i < this.btnPoutines.length; i++) {
      const btnPoutine = this.btnPoutines[i];
      btnPoutine.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.innerText;
    this.uptadePhoto();
  }
  uptadePhoto() {
    const monImage = this.element.querySelector('.js-img-choix');
    monImage.classList.add('is-active');
    monImage.src = `assets/images/${this.selectedType}.png`;
  }
}
