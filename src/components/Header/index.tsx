import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  HeaderComponent,
  HeaderProductComponent,
  HeaderContent,
  Titulo
} from './styles'
import { useLocation } from 'react-router-dom'
import { abrir } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

const Header = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  const abrirCarrinho = () => {
    dispatch(abrir())
  }

  return pathname === '/' ? (
    <HeaderComponent>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <HeaderContent>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </HeaderContent>
    </HeaderComponent>
  ) : (
    <HeaderProductComponent className="produtos">
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="#" onClick={abrirCarrinho}>
        {itens.length} produto(s) no carrinho
      </Link>
    </HeaderProductComponent>
  )
}

export default Header
