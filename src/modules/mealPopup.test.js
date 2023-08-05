import { commentCounter } from './mealPopup.js';

test('Counting total number of comments', () => {
  document.body.innerHTML = `
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        <div class="comment"></div>
                        `;
  const totalComments = commentCounter();
  expect(totalComments).toBe(9);
});