import { Chip } from '@mui/material';
import * as React from 'react';
import './App.css';


function Etiqueta(props: any) {
  return (
    <div>
        <Chip label={props.texto} sx={{height: '80%', marginLeft: '3%', backgroundColor: props.corPrimaria, color: props.corTexto}}/>
    </div>
  );
}

export default Etiqueta;