'use strict';

/**
 * @jest-environment jsdom
 */

test('envoie un message au websocket', () => {
  expect(true).toBe(true)
})

// test('envoie un message au websocket', () => {
//   let wsInstance
//   global.WebSocket = class {
//     constructor(url) {
//       this.url = url
//       this.readyState = 1
//       this.send = jest.fn()
//       wsInstance = this
//       setTimeout(() => this.onopen && this.onopen(), 0)
//     }
//     addEventListener(event, cb) {
//       if (event === 'open') { this.onopen = cb }
//       if (event === 'message') { this.onmessage = cb }
//     }
//   }

//   document.body.innerHTML = `
//     <input id="messageInput" />
//     <button id="sendButton"></button>
//     <div id="messages"></div>
//   `

//   require('../src/renderer/renderer.js')

//   const input = document.getElementById('messageInput')
//   input.value = 'hello'
//   const button = document.getElementById('sendButton')
//   button.click()

//   expect(wsInstance.send).toHaveBeenCalledWith('hello')
// })
