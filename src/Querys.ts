import { gql } from "@apollo/client";

const GetQuadro = gql`
query{
    quadro{
        id
        infoQuadro{
            id
            descricao
            idAreaTrabalho
            dataInicial
            dataFinal
            sprint
            status
            infoColunas{
                id
                idQuadro
                colunas{
                    id
                    descricao
                    controlaTempo
                    finalizaProcesso
                    ordem
                    cartoes{
                        id
                        descricao
                    }
                }
            }
        }
    }
}`;


export default GetQuadro