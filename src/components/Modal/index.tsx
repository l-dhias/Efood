import { Container } from '../../global/globalStyles'
import { MenuItem } from '../../types'
import { Overlay, ModalContent } from './styles'
import close from '../../assets/images/close.png'

interface ModalProps {
  product: MenuItem | null
  onClose: () => void
}

const Modal = ({ product, onClose }: ModalProps) => {
  if (!product) return null // 🔥 ESSENCIAL

  return (
    <Overlay onClick={onClose}>
      <Container>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h3>{product.nome}</h3>
            <p>{product.descricao}</p>
            <p>Serve de: {product.porcao}</p>

            <button>
              Adicionar ao Carrinho - R$ {product.preco.toFixed(2)}
            </button>

            <img src={close} alt="Fechar" className="close" onClick={onClose} />
          </div>
        </ModalContent>
      </Container>
    </Overlay>
  )
}

export default Modal
