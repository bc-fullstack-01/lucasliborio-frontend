import React, { ReactNode } from "react";
import { IconButton, Menu } from "@mui/material";
interface ICustomIconButton {
  children: ReactNode;
  label?: string,
  onClickFunction?: any
}
export const CustomIconButton = (
  {
    children,
    label,
    onClickFunction
  }: ICustomIconButton) => {
    
  return (
    <>
      <IconButton
        size='large'
        aria-label={label}
        color="inherit"
        onClick={onClickFunction}
      >
        {children}
      </IconButton>
    </>
  )
}