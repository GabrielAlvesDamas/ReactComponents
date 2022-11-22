export interface ICartao {
    id: number,
    descricao: string
}

export interface IColunas {
    id: number
    descricao: string
    controlaTempo: boolean
    finalizaProcesso: boolean
    ordem: number
    cartoes: ICartao[]
}

export interface IColunasQuadro {
    id: number
    idQuadro: number
    colunas: IColunas[]
}

export interface IQuadroInfo  {
    id: number
    descricao: string
    idAreaTrabalho: number
    dataInicial: string
    dataFinal: string
    sprint: number
    status: string
    infoColunas: IColunasQuadro[]
}

export interface IQuadro {
    id: number
    infoQuadro: IQuadroInfo[]
}

export default IQuadro