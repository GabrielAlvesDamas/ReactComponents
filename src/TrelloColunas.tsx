import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import TrelloCartao from './InovaTrelloCartão';
import './InovaTrelloColunas.css';


function TrelloColunas(props: any) {
  let cartoes: Array<ReactJSXElement> = []
  props.Cartoes.forEach((i: any) => {
    cartoes.push(<TrelloCartao Id={i.Id} Descricao={i.Descricao}/>)
  })
  return (
    <div className='ContainerColuna'>
        <div className='CabecalhoColuna'/>
            <div className='CorpoColuna'> 
                <div className='CartãoContainer'>
                  {cartoes}
                </div>
            </div>
        <div className='RodapeColuna'/>
        {props.children}
    </div>
  );
}

export default TrelloColunas;