import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import InovaTrelloCartao from './InovaTrelloCartão';
import './InovaTrelloColunas.css';

const cartoes: Array<ReactJSXElement> = [                  

]

function InovaTrelloColunas(props: any) {
  props.Cartoes.forEach((i: any) => {
    cartoes.push(<InovaTrelloCartao Id={i.Id} Descricao={i.Descricao}/>)
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

export default InovaTrelloColunas;