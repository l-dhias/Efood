import { useEffect, useState } from 'react'
import Restaurantes from '../../components/Restaurants'
import { Container } from '../../global/globalStyles'
import { HomeContainer } from './styles'

type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio:[] {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <HomeContainer>
      <Container>
        <Restaurantes restaurants={restaurants} />
      </Container>
    </HomeContainer>
  )
}

export default Home
