Array.from(document.getElementsByClassName('banner')).forEach(el => {
  el.style.backgroundImage = `url('${el.getAttribute('data-background')}')`
})

document.getElementsByClassName('mobile-button')[0].addEventListener('click', async e => {
  document.getElementsByClassName('fullscreenList')[0].classList.toggle('show')
  if (document.getElementsByClassName('fullscreenList')[0].classList[1] == 'show') {
    e.target.src = 'https://i.ibb.co/n6GtHZN/navicon-close.png'
  } else {
    e.target.src = 'https://i.ibb.co/xzgxxZW/navicon.png'
  }
  let list = document.createElement('ul')
  list.innerHTML = document.querySelector('nav ul').innerHTML
  list.querySelector('li').remove()
  document.getElementsByClassName('fullscreenList')[0].innerHTML = ''
  document.getElementsByClassName('fullscreenList')[0].append(list)
  Array.from(document.getElementsByClassName('fullscreenList')[0].getElementsByTagName('a')).forEach(el => {
    el.addEventListener('click', () => {
      document.getElementsByClassName('mobile-button')[0].getElementsByTagName('img')[0].src = 'https://i.ibb.co/xzgxxZW/navicon.png'
      document.getElementsByClassName('fullscreenList')[0].classList.remove('show')
    })
  })
})