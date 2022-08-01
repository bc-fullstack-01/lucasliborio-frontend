import { Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MenuProfile = ({ children }: any) => {
  const username = localStorage.getItem('username')
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
      <IconButton
        size='large'
        color="inherit"
        onClick={handleOpenUserMenu}
      >
        {children}
      </IconButton>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem disabled divider={true}>
          <Typography color="text.primary" textAlign="center">Logado como: {username}</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>

    </>
  )
}