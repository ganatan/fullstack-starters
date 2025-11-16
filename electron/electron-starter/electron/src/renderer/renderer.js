'use strict';

const input = document.getElementById('messageInput')
const button = document.getElementById('sendButton')
const messages = document.getElementById('messages')

window.api.onMessage((data) => {
  const div = document.createElement('div')
  div.textContent = `Serveur : ${data}`
  messages.appendChild(div)
})

button.addEventListener('click', () => {
  const text = input.value
  window.api.send(text)
  const div = document.createElement('div')
  div.textContent = `Vous : ${text}`
  messages.appendChild(div)
  input.value = ''
})

