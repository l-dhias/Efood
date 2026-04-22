import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../types'

type EstadoCarrinho = {
  itens: MenuItem[]
  isOpen: boolean
}

const estadoInicial: EstadoCarrinho = {
  itens: [],
  isOpen: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: estadoInicial,
  reducers: {
    add: (estado, acao: PayloadAction<MenuItem>) => {
      estado.itens.push(acao.payload)
    },
    remover: (estado, acao: PayloadAction<number>) => {
      const indexParaRemover = estado.itens.findIndex(
        (item) => item.id === acao.payload
      )
      if (indexParaRemover !== -1) {
        estado.itens.splice(indexParaRemover, 1)
      }
    },
    abrir: (estado) => {
      estado.isOpen = true
    },
    fechar: (estado) => {
      estado.isOpen = false
    },
    limpar: (estado) => {
      estado.itens = []
    }
  }
})

export const { add, remover, abrir, fechar, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
