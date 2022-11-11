import * as React from 'react';
import InovaTrelloCartao from './InovaTrelloCartão';
import './InovaTrelloColunas.css';

const cartoes = [                  
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
<InovaTrelloCartao satText='Prior: 16 - 335 / 2021 - Pontos[8 / 8]'/>,
]

function InovaTrelloColunas(props: any) {
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