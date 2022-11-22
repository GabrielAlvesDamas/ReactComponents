import * as React from 'react';
import maximize from './fontisto-master/icons/svg/interfaces/nav-icon-list.svg'
import Button from '@mui/material/Button';
import './SideBar.css';
import expandCollapse from './Typescript';
import { ChangeEvent, useState } from 'react';
import { Avatar, ButtonGroup } from '@mui/material';


const buttons = [
  <Button className='sideMenuButtons'>Relatório</Button>,
  <Button className='sideMenuButtons'>Sistema</Button>,
  <Button className='sideMenuButtons'>Alterar senha</Button>,
  <Button className='sideMenuButtons'>Sobre</Button>,
  <Button className='sideMenuButtons'>Sair</Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
  <Button className='sideMenuButtons'></Button>,
];


function SideBar(props: any) {
  return (
    <div>
      <div className='sideMenu' id='menu'>
            <button className='expandCollapseButton'  onClick={expandCollapse}>
            <div className='TituloContainer'>
            <p>Titulo</p>
            </div>
            <Avatar className='IconBack' variant='rounded'>
              <img src={maximize} alt="maximizeIcon" className='expandCollapseImg' id='expandCollapseImage'/>
            </Avatar>
            </button>
        <div className='container'>
          <ButtonGroup orientation="vertical" variant='text' className='MenuButtonGroup'>
            {buttons}
          </ButtonGroup>
        </div>
      </div>
        <script src='./Typescript.ts'></script>
      {props.children}
    </div>
  );
}

export default SideBar;