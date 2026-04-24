import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './global/globalStyles'
import Header from './components/Header'
import Rotas from './pages/routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Footer />
        <Checkout />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
