import { Restaurant } from '../../types'
import Card from '../Card'
import { RestaurantsContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const Restaurantes = ({ restaurants }: Props) => {
  return (
    <RestaurantsContainer>
      {restaurants.map((item) => (
        <Card
          key={item.id}
          card="primary"
          kindButton="link"
          nameButton="Saiba Mais"
          to={`/perfil/${item.id}`}
          title={item.titulo}
          description={item.descricao}
          rating={item.avaliacao}
          tagType={item.tipo}
          tagHighlight={item.destacado}
          cover={item.capa}
        />
      ))}
    </RestaurantsContainer>
  )
}

export default Restaurantes
