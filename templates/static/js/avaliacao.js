let anotation_content = document.querySelector('#anotation-content')
let form_anotation = document.querySelector('#form_anotation').innerHTML

function add_anotation() {
    let temp = document.createElement('div')
    temp.innerHTML = form_anotation
    anotation_content.appendChild(temp)
}