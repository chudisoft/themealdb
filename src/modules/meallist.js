// eslint-disable-next-line import/no-extraneous-dependencies
import Toastify from 'toastify-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'toastify-js/src/toastify.css';
import MealPopup from './mealPopup';

export default class MealList {
  constructor(appId, baseUrl, baseUrlInvolve, mealId) {
    this.mealId = mealId;
    this.list = document.querySelector('.meal-list');
    this.likeTotal = document.querySelector('.likeTotal');
    this.appId = appId;
    this.likes = [];
    this.baseUrl = baseUrl;
    this.baseUrlInvolve = baseUrlInvolve;
  }

  getMeallist() {
    return this.meallist;
  }

  showMeal(meal, likeCount) {
    const div = document.createElement('div');
    const divDetails = document.createElement('div');
    const divButton = document.createElement('div');
    const elName = document.createElement('label');
    const elLikeParent = document.createElement('label');
    const elLike = document.createElement('i');
    const elIcon = document.createElement('img');
    const elLikeCount = document.createElement('span');
    const elComment = document.createElement('button');

    div.className = 'meal-detail';
    elLikeParent.className = 'ps-2';
    elLike.className = 'fa fa-heart';

    elName.textContent = meal.strMeal;
    elComment.textContent = 'Comments';
    elIcon.src = meal.strMealThumb;

    elComment.addEventListener(
      'click', () => new MealPopup(this.appId, this.baseUrl, this.baseUrlInvolve, meal.idMeal).getMeal(null),
    );

    elLike.addEventListener(
      'click', () => this.addLike(null, meal.idMeal, elLikeCount),
    );
    elLikeCount.textContent = ` (${likeCount})`;
    elLikeCount.counter = likeCount;
    elLikeParent.appendChild(elLike);
    elLikeParent.appendChild(elLikeCount);

    div.appendChild(elIcon);
    divDetails.appendChild(elName);
    divDetails.appendChild(elLikeParent);
    divButton.appendChild(elComment);
    divDetails.appendChild(divButton);
    div.appendChild(divDetails);
    this.list.appendChild(div);
  }

  getMeals = (async (btnRefresh = null) => {
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
    const response = await fetch(`${this.baseUrl}search.php?s=`, {
      method: 'get',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const meals = await response.json();
    if (meals.message) {
      this.lblMessage.textContent = meals.message;
    } else {
      const url = `${this.baseUrlInvolve + this.appId}/likes`;
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
      });
      const er = await response.text();
      if (er !== '') {
        const likes = JSON.parse(er);
        if (likes.error) {
          Toastify({
            text: likes.error.message,
            className: 'info',
            style: {
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
            },
          }).showToast();
        } else if (likes !== undefined) {
            this.likes = likes;
            this.countLikes();
        }
      }
      meals.meals.forEach((meal) => {
        let like = this.likes.find((x) => x.item_id === meal.idMeal);
        if (like === undefined) {
          like = {
              likes: 0,
              item_id: meal.idMeal,
          };
        }
        this.showMeal(meal, like.likes);
      });
      this.countLikes();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
  });

  addLike = (async (btnRefresh = null, idMeal, elLikeCount) => {
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const likeObject = {
        item_id: idMeal,
      };
    const response = await fetch(`${this.baseUrlInvolve}${this.appId}/likes`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify(likeObject),
    });
    const result = await response.text();
    if (result.error) {
      Toastify({
        text: result.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else {
      Toastify({
        text: result,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
      elLikeCount.counter = Number(elLikeCount.counter) + 1;
      elLikeCount.textContent = ` (${Number(elLikeCount.counter)})`;
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });

  countLikes = (() => {
    this.likeTotal.innerText = this.likes.length;
  });
}