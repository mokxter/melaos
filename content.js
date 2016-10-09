// scroll reference
let scrollMagic, scrollFlag = false

function ready(fn) {
  if (document.readyState != 'loading' || document.readState !== 'interactive'){
    fn()
  } else if (document.addEventListener){
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState !== 'loading')
        fn()
    })
  }
}

let melaos = () => {
  window.addEventListener('keydown', event => {
    try {
      if (!scrollFlag) {
        scrollFlag = true
        switch (event.keyCode) {
          case 37:
          case 65:
            event.preventDefault()
            scrollMagic = setInterval(() => {
              document.querySelector("#containerRoot > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)").click()
            }, 20)
            break;
          case 39:
          case 68:
            event.preventDefault()
            scrollMagic = setInterval(() => {
              document.querySelector("#containerRoot > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)").click()
            }, 20)
            break;
          case 40:
          case 83:
            event.preventDefault()
            scrollMagic = setInterval(() => {
              window.scrollBy(0,13)
            }, 20)
            break
          case 38:
          case 87:
            event.preventDefault()
            scrollMagic = setInterval(() => {
              window.scrollBy(0,-13)
            }, 20)
            break
        }
      }
    } catch (err) {
      console.warn("Can't find node for prev/next page")
    }
  })
  
  
  window.addEventListener('keyup', event => {
    scrollMagic = window.clearInterval(scrollMagic)
    scrollFlag = false
  })
}

ready(melaos)
