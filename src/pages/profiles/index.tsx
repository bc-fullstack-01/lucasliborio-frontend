import React from "react";
import server from "../../api/server";
import { CustomNavBar } from "../../components/custom-navbar";


export const HomePage = () => {
  const getPosts = async () =>{
    try {
      const token = localStorage.getItem('accessToken')
      const response = await server.post('/feed', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
  
    }
  }
  return (
  <CustomNavBar title="HOME"/>
  )
}