export default class Popover {
  constructor(element) {
    this.element = element;
    this.popover = null;
  }

  onClick(id) {
    const popover = document.createElement('div');
    popover.className = 'popover';
    const title = document.createElement('h3');
    title.className = 'title';
    const content = document.createElement('p');
    content.className = 'content';

    title.textContent = id.dataset.title;
    content.textContent = id.dataset.content;

    const coordinatesButton = id.getBoundingClientRect();

    id.after(popover);
    popover.append(title);
    popover.append(content);

    popover.style.top = coordinatesButton.top + window.pageYOffset - popover.offsetHeight - 8 + 'px';
    popover.style.left = coordinatesButton.left - popover.offsetWidth / 2 + id.offsetWidth / 2 + 'px';

    this.popover = true;
  }

  bind() {
    const buttons = this.element.querySelectorAll('.button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (this.popover !== null) {
          if (document.querySelector('.popover').previousSibling === button) {
            document.querySelector('.popover').remove();
            this.popover = null;
          } else if (document.querySelector('.popover').previousSibling !== button) {
            document.querySelector('.popover').remove();
            this.popover = null;
            this.onClick(button);
          }
        } else {
          this.onClick(button);
        }
      });
    })

    document.addEventListener('click', (e) => {
      let target = e.target;
      if (this.popover !== null) {
        if (!target.closest('.button') && !target.closest('.popover')) {
          document.querySelector('.popover').remove();
          this.popover = null;
        }
      }
    })
  }
}
