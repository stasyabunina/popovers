/** * @jest-environment jsdom */
import Popover from '../popover';

test('testing if popover shows up', () => {
  document.body.innerHTML = `<div class="container">
  <button class="button button_one" type="button" data-title="Popover title"
    data-content="And here's some amazing content.">Click to toggle popover</button>
  <button class="button" type="button" data-title="Another popover title"
    data-content="And here's some another amazing content.">Click to toggle another popover</button>
  </div>`;

  const container = document.querySelector('.container');

  const popover = new Popover(container);

  popover.bind();

  document.querySelector('.button_one').click();

  expect(popover.popover).toBeTruthy();
});
