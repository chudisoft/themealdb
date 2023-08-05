 import mealCounter from '../cards/mealCounter.js';

describe('Test the meals counter method', () => {
  test('Counting total number of meals', () => {
    document.body.innerHTML = `
                            <ul class="mealItem"></ul>
                            <ul class="mealItem"></ul>
                            <ul class="mealItem"></ul>
                            <ul class="mealItem"></ul>
                            <ul class="mealItem"></ul>
                            <ul class="mealItem"></ul>
                            <ul id="totalMeals"></ul>
                            `;

    const toatlMeals = mealCounter();
    expect(toatlMeals).toBe(6);
  });
});