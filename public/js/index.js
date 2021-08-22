/* eslint-disable */

import '@babel/polyfill'
import axios from 'axios'
import { showAlert } from './alerts'

const submit = async (name, email, message) => {
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

const submitForm = document.querySelector('.form')

if (submitForm)
  submitForm.addEventListener('submit', e => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        // console.log({name, email, message})
        submit(name, email, message)
    })

