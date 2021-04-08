function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check the "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.list = [...element.querySelectorAll('.img')];
  //target
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  //console.log(this.list);
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
