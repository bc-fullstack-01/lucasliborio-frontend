import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { CustomContainer } from "../../components/container/container";
import { CustomNavBar } from "../../components/custom-navbar";
import { DropZone } from "../../components/dropzone";

import server from "../../api/server";
import { useNavigate } from "react-router-dom";

export const NewPostPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  console.log(formData)
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.dir(event.target)
    setFormData((f: any) => ({ ...f, [name]: value }))

  }
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const { title, description } = formData
    const data = new FormData()
    data.append("title", title)
    data.append("description", description)
    data.append("image", selectedFile ?? 'none')


    try {
      const response = await server.post("/post/new", data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      if (response) navigate('/home')
    } catch (error) {

    }
  }
  return (
    <>
      <CustomNavBar title="New Post" />
      <CustomContainer>
        <Stack
          width='100%'
          spacing={4}
          component='form'
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            name="title"
            label="What you think today ?"
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-multiline-static"
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="standard"
            onChange={handleInputChange}
          />
          <DropZone onFileUploaded={setSelectedFile} />
          <Button type="submit" variant="contained">Publish</Button>
        </Stack>
      </CustomContainer>
    </>
  )
}