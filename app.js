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
  this.list = element.querySelectorAll('.img');
  console.log(this.list);
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
