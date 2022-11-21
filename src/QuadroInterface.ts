export interface CartaoInterface {
    Id: number,
    Descricao: string
}

export interface IColunas {
    Id: number
    Descricao: string
    ControlaTempo: boolean
    FinalizaProcesso: boolean
    Ordem: number
    Cartoes: CartaoInterface[]
}

export interface IColunasQuadro {
    Id: number
    IdQuadro: number
    Colunas: IColunas[]
}

export interface IQuadroInfo  {
    Id: number
    Descricao: string
    IdAreaTrabalho: number
    DataInicial: string
    DataFinal: string
    Sprint: number
    Status: string
    InfoColunas: IColunasQuadro[]
}

export interface IQuadro {
    Id: number
    InfoQuadro: IQuadroInfo[]
}

export default IQuadro