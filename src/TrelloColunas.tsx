import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';
import TrelloCartao from './TrelloCartão';
import './TrelloColunas.css';
import optionIcon from './fontisto-master/icons/svg/interfaces/move-h-a.svg'
import addIcon from './fontisto-master/icons/svg/interfaces/plus-a.svg'


function TrelloColunas(props: any) {
  let cartoes: Array<ReactJSXElement> = []
  props.Cartoes.forEach((i: any) => {
    cartoes.push(<TrelloCartao Id={i.Id} Descricao={i.Descricao}/>)
  })
  return (
    <div className='ContainerColuna'>
        <div className='CabecalhoColuna'>
          <h5 className='TituloColuna'>{props.Titulo}</h5>
          <img src={optionIcon} className='BotaoConfig'/>
        </div>
            <div className='CorpoColuna'> 
                <div className='CartãoContainer'>
                  {cartoes}
                </div>
            </div>
        <div className='RodapeColuna'>
          <h5 className='TextoRodapeColuna'>Adicionar Cartão</h5>
          <img src={addIcon} className='BotaoAddCartao'/>
        </div>
        {props.children}
    </div>
  );
}

export default TrelloColunas;