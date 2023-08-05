import like from '../likes/heart.gif';
import closeIcon from '../likes/x-circle-fill.svg';
import addLike from '../likes/addLike.js';
import { mealPopup } from '../mealPopup.js';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = ('imgCancel');

const myLike = new Image();
myLike.src = like;
myLike.classList = 'imgLike';

const mealCard = (title, category, area, instructions, id, imageId, likeNum) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';

const strUl = document.createElement('ul');
strUl.className = 'strUl';

const strCat = document.createElement('ul');
strCat.className = 'strCat';

const strArea = document.createElement('ul');
strArea.className = 'strArea';

const strInstr = document.createElement('ul');
strInstr.className = 'strInstr';

const likeUl = document.createElement('ul');
likeUl.className = 'likeUl';

const buttonUl = document.createElement('ul');
  buttonUl.className = 'buttonUl';

const buttonComment = document.createElement('ul');
  buttonComment.className = 'button';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;
strCat.innerHTML = `<span class='catlablel'>Catgory:- ${category}</span>`;
strArea.innerHTML = `<span class='arealabel'>Area:- ${area}</span>`;
strInstr.innerHTML = `<p class='hide'>${instructions}</p>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${like}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
buttonComment.innerHTML = `<ul>Comments</ul><span class='hide'>${id}</span>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
ul.appendChild(strCat);
ul.appendChild(strArea);
ul.appendChild(strInstr);
buttonUl.appendChild(buttonComment);
ul.appendChild(buttonUl);
board.appendChild(ul);

likeUl.addEventListener('click', (e) => {
  if (e.target.classList.contains('stop')) {
    return;
  }
  addLike(e.target.previousElementSibling.textContent);
  const sumlike = e.target.nextElementSibling.textContent;
  e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;
});

const overlay = document.querySelector('.open-popup');
const cancel = document.querySelector('.close-popup');
cancel.appendChild(myCancel);

buttonComment.addEventListener('click', (e) => {
  overlay.style.display = 'block';
  mealPopup(e.target.nextElementSibling.textContent);
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.comments-board').innerHTML = '';
});
};

export default mealCard;