// pegando elementos pela classes - DOM

let box = document.getElementsByClassName('box')

/*
box[0].style.width = '200px'
box[0].style.height = '200px'
box[0].style.backgroundColor = 'lightgreen'
*/

for(let i = 0 ; i < box.length ; i ++) {
    box[i].style.width = '200px'
    box[i].style.height = '200px'
    box[i].style.backgroundColor = 'lightgreen'
    box[i].style.display = 'inline-block'
    box[i].style.marginBottom = '10px'
}
