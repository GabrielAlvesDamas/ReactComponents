import * as React from 'react';
import './TrelloQuadro.css';
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
        Colunas.push(<TrelloColunas 
                      Id={element.id} 
                      Descricao={element.descricao} 
                      Ordem={element.ordem} 
                      Cartoes={element.cartoes}
                      Titulo={'À Fazer'/*element.Titulo*/}/>)
      })
    })
  })
return (
  <div className='Container'>
  <p style={{width: "100%", margin: '0', color: 'darkblue', fontWeight: 'bolder'}}>Quadro Sprint: 151 - Versão: 6.00 Releas: 00072/01 - Conversor: 175 - Inicio: 01/10/2022 - 13/10/2022 </p>
  {Colunas}
  </div>
  );
}

export default TrelloQuadro;
