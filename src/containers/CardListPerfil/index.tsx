import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../../services/api'
import { MenuDataProps } from '../../types'
import { Container } from '../../global/globalStyles'
import Card from '../../components/Card'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'
import Modal from '../../components/Modal'
import { useState } from 'react'

export const formataDescricao = (products: string) => {
  const limiteCaracteres = 150
  if (products.length > limiteCaracteres) {
    return products.substring(0, limiteCaracteres - 3) + '...'
  }
  return products
}

const CardListPerfil = () => {
  const { id } = useParams()
  const restaurant = id ? getRestaurantById(parseInt(id)) : undefined

  const [selectedProduct, setSelectedProduct] = useState<MenuDataProps | null>(
    null
  )

  const closeModal = () => setSelectedProduct(null)

  function renderProductList(products: MenuDataProps[]) {
    if (!products || products.length === 0) {
      return (
        <TextMessage>
          Não existem ainda produtos para este restaurante
        </TextMessage>
      )
    }

    return products.map((product) => (
      <Card
        key={product.id}
        card="second"
        kindButton="button"
        nameButton="Mais detalhes"
        title={product.nome}
        description={product.descricao}
        cover={product.foto}
        handleClick={() => setSelectedProduct(product)}
      />
    ))
  }

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <>
      <ContainerListPerfil>
        <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
          <Container>
            <SubTitle>{restaurant.tipo}</SubTitle>
            <Title>{restaurant.titulo}</Title>
          </Container>
        </BannerContainer>

        <Container>
          <CardListContainer>
            {renderProductList(restaurant.cardapio)}
          </CardListContainer>
        </Container>
      </ContainerListPerfil>

      <Modal product={selectedProduct} onClose={closeModal} />
    </>
  )
}

export default CardListPerfil
