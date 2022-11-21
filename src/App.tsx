import * as React from 'react';
import './App.css';
import InovaTrelloQuadro from './InovaTrelloQuadro';
import { DocumentNode, useQuery } from '@apollo/client';
import GetQuadro from './Querys';
import SideBar from './sideBar';
import Quadro, { Cartao, Colunas, ColunasQuadro, QuadroInfo } from './QuadroClasse';
import IQuadro from './QuadroInterface';
import ClientApollo from './Apollo';


let quadro: Quadro = new Quadro();

function CarregarQuadro() {
  const { loading, error, data } = useQuery(GetQuadro, { fetchPolicy: 'cache-and-network' })
  if (loading) return <span>loading</span>
  if (error) return <span>error</span>
  quadro.Id = data.quadro.id
  /*data.quadro.infoQuadro.map((element: Quadro) => {
    
  })*/
  data.quadro.infoQuadro.forEach((element: any) => {
    var infoColunas: ColunasQuadro[] = []

      element.infoColunas.forEach((element: any) => {
        var colunas: Colunas[] = []

          element.colunas.forEach((element: any) => {
            var cartoes:Cartao[] = []

              element.cartoes.forEach((element: any) => {
                cartoes.push({
                  Id: element.id,
                  Descricao: element.descricao
                })
              })

            colunas.push({
              Id: element.id,
              ControlaTempo: element.controlaTempo,
              FinalizaProcesso: element.finalizaProcesso,
              Ordem: element.ordem,
              Descricao: element.descricao,
              Cartoes: cartoes,
            })
          })

        infoColunas.push({
          Id: element.id,
          IdQuadro: element.idQuadro,
          Colunas: colunas
        })
      })

    quadro.InfoQuadro.push({
      Id: element.id,
      Descricao: element.descricao,
      DataFinal: element.dataInicial,
      DataInicial: element.dataFinal,
      IdAreaTrabalho: element.idAreaTrabalho,
      Sprint: element.sprint,
      Status: element.status,
      InfoColunas: infoColunas,
    })
  });
  //console.log(quadro)
  return <InovaTrelloQuadro quadro={quadro} />
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