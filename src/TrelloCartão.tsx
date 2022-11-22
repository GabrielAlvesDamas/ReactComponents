import { Avatar, Chip, Slider, TextField } from '@mui/material';
import styledEngine, { StyledEngineProvider } from '@mui/styled-engine';
import * as React from 'react';
import './InovaTrelloCartao.css';



function InovaTrelloCartao(props: any){
  const satText = props.satText;
  const [value, setValue] = React.useState<number | string | Array<number | string>>();


  const valorInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <StyledEngineProvider injectFirst>
        <div className='CartaoCorpo'>
            <div className='CartaoCabecalho'>
              <Avatar className='Avatar'/>
                <h1 className='SatHistoria'>{satText}</h1>
            </div>
            <div className='CartaoConteudo'>
            <h1 className='SatHistoria'>História 9855</h1>
            <p className='SatHistoria' style={{display: 'block'}}>
            {props.Descricao}</p>
            </div>
            <div className='CartaoRodape'>
              <Slider 
                className='BarraProgresso'
                size='small'
                valueLabelDisplay='off' 
                min={0} 
                max={100}
                value={typeof value === 'number' ? value : 0}
              />
                <div className='valorInput'>
                  <TextField 
                    label="" 
                    variant="standard" 
                    size='small' 
                    margin='none' 
                    fullWidth={false} 
                    value={value} 
                    onChange={valorInputChange}
                  />
                </div>
            </div>
          {props.children}
        </div>
    </StyledEngineProvider>
  );
}

export default InovaTrelloCartao;