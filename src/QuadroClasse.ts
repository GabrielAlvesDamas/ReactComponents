import IQuadro, { CartaoInterface, IColunas, IColunasQuadro, IQuadroInfo } from './QuadroInterface';

export class Quadro implements IQuadro {
    Id: number = 0
    InfoQuadro: QuadroInfo[] = []
}

export class QuadroInfo implements IQuadroInfo {
    Id: number = 0
    Descricao: string = ""
    IdAreaTrabalho: number = 0
    DataInicial: string = ""
    DataFinal: string = ""
    Sprint: number = 0
    Status: string = ""
    InfoColunas: ColunasQuadro[] = []
}

export class ColunasQuadro implements IColunasQuadro {
    Id: number = 0
    IdQuadro: number = 0
    Colunas: Colunas[] = []
}

export class Colunas implements IColunas {
    Id: number = 0
    Descricao: string = ""
    ControlaTempo: boolean = false
    FinalizaProcesso: boolean = false
    Ordem: number = 0
    Cartoes: Cartao[] = []
}

export class Cartao implements CartaoInterface {
    Id: number = 0
    Descricao: string = ""
}

export default Quadro;