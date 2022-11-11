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

LicenseInfo.setLicenseKey('1757b5911b0bfa3a3c1d85b09a103e68Tz01Mjc5NyxFPTE2OTc4MjczOTQ5OTgsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');


function App() {

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <div>
      <body style={{overflow: 'auto'}}>
      <SideBar/>
      <InovaTrelloQuadro Json={json}/>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{position: 'relative' ,bottom: '0%', marginTop: '9.5%', height: '80%', width: '100%'}}
      />
      </body>
    </div>
  );
}

export default App;
