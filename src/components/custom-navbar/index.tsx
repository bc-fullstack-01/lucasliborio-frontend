import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,

} from '@mui/material'

import { CustomIconButton } from '../custom-icon-button';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface ICustomNavBar {
  title: string 
}

export const CustomNavBar = ({ title }:ICustomNavBar ) => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          {title}
        </Typography>
        <Box
          sx={{ display: { xs: 'block', sm: 'flex' }}}
        >
          <CustomIconButton label="show-home"><HomeOutlinedIcon /></CustomIconButton>
          <CustomIconButton label="show-notification"><NotificationsNoneOutlinedIcon /></CustomIconButton>
          <CustomIconButton label="show-create-post"><EditOutlinedIcon /></CustomIconButton>
          <CustomIconButton label="show-profiles"><GroupsOutlinedIcon /></CustomIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}