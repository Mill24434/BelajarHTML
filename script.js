function newtab(param) {
    if (param === 1) {
        window.open("https://www.google.com/maps/")
    }
    else if (param === 2) {
        window.open('https://www.youtube.com/')
    }
    else if (param === 3) {
        window.open('https://chatgpt.com/')
    }
    else {
        alert('button tidak terdaftar')
    }
}