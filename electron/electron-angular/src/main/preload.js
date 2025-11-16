'use strict';

const { contextBridge } = require('electron')

const socket = new WebSocket('ws://localhost:8080')

contextBridge.exposeInMainWorld('api', {
  send: (msg) => socket.send(msg),
  onMessage: (callback) => {
    socket.addEventListener('message', (event) => {
      callback(event.data)
    })
  }
})

