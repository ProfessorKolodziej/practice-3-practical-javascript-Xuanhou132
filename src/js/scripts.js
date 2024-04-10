// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const showDish = document.querySelector('.hide')

function showRecommend() {
	showDish.classList.toggle('hide')
	showDish.classList.toggle('show')
}
const showDishButton = document.querySelector("#show-recommended")
showDishButton.addEventListener("click", showRecommend)
