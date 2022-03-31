const app = document.getElementById('app-box');
const userSelect= document.getElementById('rating');
const submitButton = document.getElementById('submit-button');
const reviewMode = document.getElementById('review-mode');
const feedbackMode = document.getElementById('feedback-mode');
let ratingIndex = document.getElementById('rating-index');

let one = document.getElementById('1-box');
let two = document.getElementById('2-box');
let three = document.getElementById('3-box');
let four = document.getElementById('4-box');
let five = document.getElementById('5-box');

let ratings= [one, two, three, four, five]


const showReviewMode= () => {
  feedbackMode.style.display= 'none'
}

const showFeedbackMode= () => {
  reviewMode.style.display= 'none'
  feedbackMode.style.display= 'block'
}

const addColour = userSelect.addEventListener('click', (event) => {
  ratingIndex.innerText = event.target.innerText
  ratingValue= parseInt(event.target.innerText)
  const slicedratings = ratings.slice(0,ratingValue)
  slicedratings.forEach(rating => {
    rating.classList.add('selected-values')
  });
  userSelect.removeEventListener('click', addColour)
})


submitButton.addEventListener('click', (event) => {
  showFeedbackMode()
});


showReviewMode()