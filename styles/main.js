const btn = document.querySelector('#btn-bar')
const nav = document.querySelector('.nav')

btn.addEventListener('click',()=>{
  console.log(nav)
  nav.classList.toggle('slide-nav')

})
