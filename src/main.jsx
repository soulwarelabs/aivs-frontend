import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='228914889023-vlobbg1n7u2s3a98gtv5k6vrdnmp35cs.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
