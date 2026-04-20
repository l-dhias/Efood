export interface MenuItem {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export interface Restaurant {
  id: number
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: MenuItem[]
}
