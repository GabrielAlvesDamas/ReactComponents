type CartaoInterface = {

}

type IColunas = {
    Id: number
    Descricao: string
    ControlaTempo: boolean
    FinalizaProcesso: boolean
    Ordem: number
    Cartao: [CartaoInterface]
}

type IColunasQuadro = {
    Id: number
    IdQuadro: number
    Colunas: [IColunas]
}

export type IQuadro = {
    Id: number
    Descricao: string
    IdAreaTrabalho: number
    DataInicial: string
    DataFinal: string
    Sprint: number
    Status: string
    Colunas: [IColunasQuadro]
}