import * as React from 'react';
import './InovaTrelloQuadro.css';
import InovaTrelloColunas from './InovaTrelloColunas';
import SideBar from './sideBar';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Quadro, { QuadroInfo } from './QuadroClasse';
import ClientApollo from './Apollo';
import GetQuadro from './Querys';


let quadro:Quadro;

const Colunas:Array<ReactJSXElement> = []


function InovaTrelloQuadro(props: any) {
  quadro = props.quadro
  quadro.InfoQuadro.map((i) => {
    i.InfoColunas.map((x) =>{
      x.Colunas.forEach((element) => {
        Colunas.push(<InovaTrelloColunas Id={element.Id} Descricao={element.Descricao} Ordem={element.Ordem} Cartoes={element.Cartoes}/>)
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

export default InovaTrelloQuadro;
