import Restaurantes from '../../components/Restaurants'
import { Container } from '../../global/globalStyles'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <Restaurantes />
      </Container>
    </HomeContainer>
  )
}

export default Home
