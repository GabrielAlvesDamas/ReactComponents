import dayjs, { Dayjs } from 'dayjs';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license-pro';
import * as React from 'react';
import './App.css';
import InovaTrelloQuadro from './InovaTrelloQuadro';
import SideBar from './sideBar';
import * as json from './teste.json'
import { useDemoData } from '@mui/x-data-grid-generator';
import { DateTimePicker } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';

function App() {


  return (
    <div>
      <body style={{overflow: 'auto'}}>
      <SideBar/>
      <InovaTrelloQuadro Json={json}/>
      </body>
    </div>
  );
}

export default App;
