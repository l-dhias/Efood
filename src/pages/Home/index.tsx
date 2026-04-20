import { useEffect, useState } from 'react'
import Restaurantes from '../../components/Restaurants'
import { Container } from '../../global/globalStyles'
import { HomeContainer } from './styles'
import { Restaurant } from '../../types'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurant[]) => setRestaurants(res))
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
