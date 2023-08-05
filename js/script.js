let $ = document
let key = $.querySelector('#key')
let loc=$.querySelector("#location")
let which =$.querySelector('#which')
let cod=$.querySelector('#code')
let div=$.querySelector('#starter-text')
let vasat =$.querySelector('#keyCode')
document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'block'
	ascii.style.display = 'block'
	infos.style.display = 'block'
	console.log(event)
	event.preventDefault()
	key.innerHTML=event.key
	loc.innerHTML=event.location
	cod.innerHTML=event.code
	which.innerHTML=event.which
	vasat.innerHTML=event.keyCode


	
})