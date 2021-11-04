//? Select the elements
const progressBar = document.querySelector('.progress-bar')
const documentHeight = document.body.scrollHeight
const viewPortHeight = window.innerHeight
const scrollHeight = documentHeight - viewPortHeight

//? The function to change the height of the progress-bar
const setProgress = () => {
	const windowScrollHeight = parseInt(window.scrollY)
	const percentage = parseInt((windowScrollHeight / scrollHeight) * 100)
	progressBar.style.height = `${percentage}%`
}

//? Call the function on scroll
window.addEventListener('scroll', setProgress)
