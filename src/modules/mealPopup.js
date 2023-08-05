import displayMeals from './cards/getMeals.js';

const commentCard = (name, date, comment) => {
  const comments = document.querySelector('.divComments');
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<h5>${date}<span>:-</span> ${name} ${comment}</h5>`;
  comments.appendChild(div);
};

const getComments = async (idMeal) => {
  let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments?item_id=';
  url += idMeal;
  const response = await fetch(url);
  const data = await response.json(url);
  return data;
};

const commentCounter = () => {
  const commentCount = document.getElementsByClassName('comment').length;
  return commentCount;
};

export default commentCounter;

const commentArray = async (idMeal) => {
  const counter = document.querySelector('.divCounter');
  const div = document.createElement('div');
  div.className = 'counting';
  const data = await getComments(idMeal);
  data.forEach((comment) => {
    commentCard(comment.username, comment.creation_date, comment.comment);
  });
  counter.innerHTML = '';
  div.innerHTML = `<h4>Comments(${commentCounter()})</h4>`;
  counter.appendChild(div);
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments';

const postComment = async (name, comment, idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: idMeal,
      username: name,
      // eslint-disable-next-line object-shorthand
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'access-control-allow-origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
  const data = await response.json();
  return data;
};

const commentsCard = (title, tag, imageThumb, id, category, area, instructions) => {
  const commentsBoard = document.querySelector('.comments-board');

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = imageThumb;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  divText.className = 'divText';
  const divCounter = document.createElement('div');
  divCounter.className = 'divCounter';
  const divTable = document.createElement('div');
  divTable.className = 'divComments';

  if (!tag) {
    tag = '';
  }

  divText.innerHTML = `<h1>${title}</h1>
                        <h3>Area: ${area} | Catgory: ${category} | Tag: ${tag}</h3>
                        <p>Instructions: ${instructions}</p>`;

  const formLabel = document.createElement('label');
  formLabel.id = 'label';
  formLabel.textContent = 'Add your comment';

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.className = 'remove';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputComment = document.createElement('input');
  inputComment.id = 'comment';
  inputComment.placeholder = 'Your Insights';
  inputComment.required = true;

  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'SUBMIT';

  const inputs = [formLabel, inputName, inputComment, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  commentsBoard.appendChild(imgThumb);
  commentsBoard.appendChild(divText);
  divText.appendChild(form);
  divText.appendChild(divCounter);
  commentsBoard.appendChild(divTable);
  commentArray(id);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const comment = document.getElementById('comment');
    postComment(userName.value, comment.value, id);
    userName.value = 'Please Wait';
    comment.value = 'Please Wait';
    setTimeout(() => {
      userName.value = '';
      comment.value = '';
      divTable.innerHTML = '';
      commentArray(id);
    }, 2000);
  });
};

const mealPopup = async (idMeal) => {
  const data = await displayMeals();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(
                    meal.strMeal,
                    meal.strTags,
                    meal.strMealThumb,
                    meal.idMeal,
                     meal.strCategory,
                    meal.strArea,
                    meal.strInstructions,
                    );
    }
  });
};

export {
 mealPopup, commentsCard, postComment, commentArray, commentCounter, getComments, commentCard,
};
