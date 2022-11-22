import IQuadro, { ICartao, IColunas, IColunasQuadro, IQuadroInfo } from './QuadroInterface';

export class Quadro implements IQuadro {
    id: number = 0
    infoQuadro: QuadroInfo[] = []
}

export class QuadroInfo implements IQuadroInfo {
    id: number = 0
    descricao: string = ""
    idAreaTrabalho: number = 0
    dataInicial: string = ""
    dataFinal: string = ""
    sprint: number = 0
    status: string = ""
    infoColunas: ColunasQuadro[] = []
}

export class ColunasQuadro implements IColunasQuadro {
    id: number = 0
    idQuadro: number = 0
    colunas: Colunas[] = []
}

export class Colunas implements IColunas {
    id: number = 0
    descricao: string = ""
    controlaTempo: boolean = false
    finalizaProcesso: boolean = false
    ordem: number = 0
    cartoes: Cartao[] = []
}

export class Cartao implements ICartao {
    id: number = 0
    descricao: string = ""
}

export default Quadro;