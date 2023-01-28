let anotation_content = document.querySelector('#anotation-content')
let form_anotation = document.querySelector('#form_anotation').innerHTML

function add_anotation() {
    let temp = document.createElement('div')
    temp.setAttribute('class', 'mt-3')
    temp.innerHTML = form_anotation
    let btn_remove = document.createElement('button')
    btn_remove.setAttribute('type', 'button')
    btn_remove.setAttribute('class', 'btn btn-danger mt-3')
    btn_remove.setAttribute('onclick', 'remove_anotation(this)')
    btn_remove.innerHTML = 'Remover'
    temp.appendChild(btn_remove)
    anotation_content.appendChild(temp)
}

function remove_anotation(el) {
    el.parentElement.remove()
}