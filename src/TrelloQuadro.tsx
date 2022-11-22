import * as React from 'react';
import './InovaTrelloQuadro.css';
import TrelloColunas from './TrelloColunas';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Quadro from './QuadroClasse';


let quadro:Quadro;

const Colunas:Array<ReactJSXElement> = []


function TrelloQuadro(props: any) {
  quadro = props.quadro
  quadro.infoQuadro.map((i) => {
    i.infoColunas.map((x) =>{
      x.colunas.forEach((element) => {
        Colunas.push(<TrelloColunas Id={element.id} Descricao={element.descricao} Ordem={element.ordem} Cartoes={element.cartoes}/>)
      })
    })
  })
return (
  <div className='Container'>
  <p style={{width: "100%", height: "0%"}}>{}</p>
  {Colunas}
  </div>
  );
}

export default TrelloQuadro;
