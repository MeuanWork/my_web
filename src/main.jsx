import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UsecontextProvider from './Usecontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsecontextProvider>
      
        <App />
   
    </UsecontextProvider>

  </React.StrictMode>,
)
