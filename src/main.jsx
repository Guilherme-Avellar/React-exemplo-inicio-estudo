import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // sempre que se usa o useEffect, é necessário tirar o StrictMode
  //<StrictMode>
  <App />
  //</StrictMode>,
)
