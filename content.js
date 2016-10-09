window.addEventListener('keydown', event => {
  try {
    switch (event.keyCode) {
      case 37:
        document.querySelector("#containerRoot > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)").click()
        break;
      case 39:
        document.querySelector("#containerRoot > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)").click()
        break;
    }
  } catch (err) {
    console.warn("Can't find node for prev/next page")
  }
})

