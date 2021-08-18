/* eslint-disable */

import '@babel/polyfill'
import axios from 'axios'
import { showAlert } from './alerts'

const login = async (name, email, message) => {
  try {
    const res = await axios({
        method: 'POST',
        url: '/api/contacts/',
        data: {
            name,
            email,
            message
    }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Message sent successfully!')
      window.setTimeout(() => {
        location.assign('/')
      }, 1500)
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
}

const loginForm = document.querySelector('.form')

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('textarea').value
        // console.log({name, email, message})
        login(name, email, message)
    })

