import * as React from 'react';
import './InovaTrelloQuadro.css';
import InovaTrelloColunas from './InovaTrelloColunas';
import SideBar from './sideBar';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


const colunas:Array<ReactJSXElement> = [
]


function InovaTrelloQuadro(props: any, json:JSON) {
    for (let i = 0; i < JSON.parse(JSON.stringify(json)); i++) {
      colunas.push(<InovaTrelloColunas 
        /*Id={props.Json.InfoColunas.InfoQuadroColunas.Colunas[i].Id}
        Descricao={props.Json.InfoColunas.InfoQuadroColunas.Colunas[i].Descricao}
        Ordem={props.Json.InfoColunas.InfoQuadroColunas.Colunas[i].Ordem}*/
        />
      )
      console.log(colunas)
    }
  return (
      <div className='Container'>
        <p style={{width: "100%", height: "20%"}}>{}</p>
        {colunas}
      </div>
  );
}

export default InovaTrelloQuadro;
