import * as React from 'react';
import './App.css';
import TrelloQuadro from './TrelloQuadro';
import { useQuery } from '@apollo/client';
import GetQuadro from './Querys';
import { Cartao, Colunas, ColunasQuadro, Quadro } from './QuadroClasse';



let quadro: Quadro = new Quadro();

function CarregarQuadro() {
  const { loading, error, data } = useQuery(GetQuadro, { fetchPolicy: 'cache-and-network' })
  if (loading) return <span>loading</span>
  if (error) return <span>error</span>
  quadro.id = data.quadro.id
  /*data.quadro.infoQuadro.map((element: any) => {
    quadro.InfoQuadro.push({
      Id: element.id,
      DataInicial: element.dataInicial,
      DataFinal: element.dataFinal,
      Descricao: element.descricao,
      Sprint: element.sprint,
      Status: element.status,
      IdAreaTrabalho: element.idAreaTrabalho,
      InfoColunas: [element.infoColunas.map((element: ColunasQuadro) => {})]
    });
  })
  console.log(quadro)*/
  data.quadro.infoQuadro.forEach((element: any) => {
    var infoColunas: ColunasQuadro[] = []

      element.infoColunas.forEach((element: any) => {
        var colunas: Colunas[] = []

          element.colunas.forEach((element: any) => {
            var cartoes:Cartao[] = []

              element.cartoes.forEach((element: any) => {
                cartoes.push({
                  id: element.id,
                  descricao: element.descricao
                })
              })

            colunas.push({
              id: element.id,
              controlaTempo: element.controlaTempo,
              finalizaProcesso: element.finalizaProcesso,
              ordem: element.ordem,
              descricao: element.descricao,
              cartoes: cartoes,
            })
            cartoes = []
          })

        infoColunas.push({
          id: element.id,
          idQuadro: element.idQuadro,
          colunas: colunas
        })
        colunas = []
      })

    quadro.infoQuadro.push({
      id: element.id,
      descricao: element.descricao,
      dataFinal: element.dataInicial,
      dataInicial: element.dataFinal,
      idAreaTrabalho: element.idAreaTrabalho,
      sprint: element.sprint,
      status: element.status,
      infoColunas: infoColunas,
    })
    infoColunas = []
  });
  console.log(quadro)
  return <TrelloQuadro quadro={quadro} />
}


function App() {
  return (
    <div>
      <body style={{ overflow: 'auto' }}>
        {CarregarQuadro()}
      </body>
    </div>
  );
}

export default App;