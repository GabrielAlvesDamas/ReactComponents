import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Avatar, Box, Button, Chip, LinearProgress, LinearProgressProps, Slider, TextField, Typography } from '@mui/material';
import styledEngine, { StyledEngineProvider } from '@mui/styled-engine';
import optionIcon from './fontisto-master/icons/svg/interfaces/move-h-a.svg'
import * as React from 'react';
import './TrelloCartao.css';
import Etiqueta from './EtiquetasQuadro';
import avatar from './avatar.png'

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box className='BarraProgresso'>
      <Box sx={{ width: '100%', mr: 1}}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: '20%', paddingLeft: '44%' }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
let Etiquetas: Array<ReactJSXElement> = [
  <Etiqueta corPrimaria={'rgba(236, 91, 91, 0.521)'} corTexto={'red'} texto={'Erro - Impeditivo'}/>
]


let avatares: Array<ReactJSXElement> = [
  <Avatar src={avatar} className='Avatar'/*O avatar deverá ser lido a partir do banco de dados como prop do componente*//>,
  <Avatar src={avatar} className='Avatar'/*O avatar deverá ser lido a partir do banco de dados como prop do componente*//>,
  <Avatar src={avatar} className='Avatar'/*O avatar deverá ser lido a partir do banco de dados como prop do componente*//>,
  <Avatar src={avatar} className='Avatar'/*O avatar deverá ser lido a partir do banco de dados como prop do componente*//>,
  <Avatar src={avatar} className='Avatar'/*O avatar deverá ser lido a partir do banco de dados como prop do componente*//>,
]

function TrelloCartao(props: any){
  const satText = props.satText;
  const [value, setValue] = React.useState<number | string | Array<number | string>>();


  const valorInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <StyledEngineProvider injectFirst>
        <div className='CartaoCorpo'>
            <div className='CartaoCabecalho'>
              <div className='EtiquetasContainer'>
                {Etiquetas}
              </div>
              <img src={optionIcon} className='BotaoConfigCartao'/>
                <p className='SatHistoria'>{/*satText*/"Sat: 487 / 2022 - Hist: 9932"}</p>
            </div>
            <div className='CartaoConteudo'>
            <div className='HistoriaContainer'>
              <p className='HistoriaTexto'>
              {/*props.Descricao*/"Alterar montagem do Histórico do Lançamento de Caixa, para poder gravar o cheque informado na Quitação do Contas a Pagar."}
              </p>
            </div>
            <Button variant='outlined' className='BotaoAbrir'>Abrir</Button>
              <div className='AvatarContainer'>
                {avatares}
              </div>
            </div>
            <div className='CartaoRodape'>
              <p className='PontuacaoInicial'>Pontuação inicial: 0</p>
              <p className='PontuacaoFinal'>Pontuação final: 0</p>
              <div className='ControleTempoContainer'>
              <Button variant='contained' className='BotaoIniciar'>Iniciar</Button>
              <div className='TempoContainer'>
                <p style={{position: 'relative', margin: '0', paddingLeft: '13%', fontSize: '13px',fontWeight: '600'}}>Tempo</p>
                <p style={{position: 'relative', margin: '0', paddingLeft: '13%', fontWeight: '700', color: 'blue'}}>02:30{/*deverá receber o tempo atual gasto da história para display*/}</p>
              </div>
              <Button variant='contained' className='BotaoFechar' color='error'>Parar</Button>
              </div>
              <LinearProgressWithLabel value={73/*typeof value === 'number' ? value : 0 --- Deverá receber como parametros 
                                                                                      (Data inicial da história
                                                                                      Data final prevista da história
                                                                                      Tempo pausado) ou 
                                                                                      tempo gasto atual contando pausas*/} />
              {/*<Slider 
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
                </div>*/}
            </div>
          {props.children}
        </div>
    </StyledEngineProvider>
  );
}

export default TrelloCartao;