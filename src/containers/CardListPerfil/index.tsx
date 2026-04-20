import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MenuItem, Restaurant } from '../../types'
import { Container } from '../../global/globalStyles'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'

export const formataDescricao = (products: string) => {
  const limiteCaracteres = 150
  if (products.length > limiteCaracteres) {
    return products.substring(0, limiteCaracteres - 3) + '...'
  }
  return products
}

const CardListPerfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)

  const closeModal = () => setSelectedProduct(null)

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api-ebac.vercel.app/api/efood/restaurantes'
        )
        const data = await res.json()

        const restaurantFound = data.find(
          (item: Restaurant) => item.id === parseInt(id)
        )

        setRestaurant(restaurantFound)
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
      }
    }

    fetchData()
  }, [id])

  function renderProductList(products: MenuItem[]) {
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
        description={formataDescricao(product.descricao)}
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
