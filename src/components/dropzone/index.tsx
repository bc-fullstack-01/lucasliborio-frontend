import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image'
import './index.css'

interface Props {
  onFileUploaded: any
}

export const DropZone = ({ onFileUploaded }: Props) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState("")
  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0]
    const fileUrl = URL.createObjectURL(file)
    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)

  }, [])
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {selectedFileUrl ? (<img style={{width: '100%'}}src={selectedFileUrl} alt="Point Thumbnaill"></img>) : (<p><ImageIcon /> </p>)}
    </div>
  )
}