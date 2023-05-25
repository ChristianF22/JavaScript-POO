import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"


const title = new Component('h1', 'body', { textContent: 'Olá, Mundo!!'})
title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('Nome: ', form, {htmlFor: 'nameInput'})
const input = new Input(form, { id: 'nameInput', name: 'name'})



form.render()
label.render()
input.render()


//USANDO O form.addChildren, podemos criar novos elementos
form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Sobrenome: ', form, {htmlFor: 'nameInput'}),
    new Input(form, { id: 'nameInput', name: 'sobrenome'}),
    new Component('br'),
    new Component('br'),
    new Label("Data de nascimento:", {htmlFor: 'birthdayInput'}),
    new Input(form, { id:'birthdayInput' , name:'birthday', type:'date'}),
    new Component('br'),
    new Component('br'),
    new Component('button', 'body', {textContent:'Enviar'})
)