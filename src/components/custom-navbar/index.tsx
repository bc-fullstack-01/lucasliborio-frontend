import React, { ReactNode } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,

} from '@mui/material'

import { CustomIconButton } from '../custom-icon-button';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';
import { MenuProfile } from '../menu-logout';

interface ICustomNavBar {
  title: string
}

export const CustomNavBar = ({ title }: ICustomNavBar) => {
  const navigate = useNavigate()

  return (
    < AppBar position='fixed' >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          {title}
        </Typography>
        <Box
          sx={{ display: { xs: 'block', sm: 'flex' } }}
        >
          <CustomIconButton onClickFunction={() => navigate("/home")} label="show-home"><HomeOutlinedIcon /></CustomIconButton>
          <CustomIconButton onClickFunction={() => navigate("/notifications")} label="show-notification"><NotificationsNoneOutlinedIcon /></CustomIconButton>
          <CustomIconButton onClickFunction={() => navigate("/new-post")} label="show-create-post"><EditOutlinedIcon /></CustomIconButton>
          <CustomIconButton onClickFunction={() => navigate("/profiles")} label="show-profiles"><GroupsOutlinedIcon /></CustomIconButton>
          <MenuProfile><AccountCircleIcon /></MenuProfile>
        </Box>
      </Toolbar>
    </AppBar >
  )
}