import React from 'react'
import {useDropzone} from 'react-dropzone'
import {CloudUploadOutlined} from '@ant-design/icons'

function MyDropzone({className}) {
  const {getRootProps, getInputProps} = useDropzone()
  // console.log(getRootProps);
  

  return (
    <div className={className} {...getRootProps()}>
      <input {...getInputProps()} />
      <div><CloudUploadOutlined /></div>
      <h1>Drop files here or click to upload.</h1>
      <p>(This is just a demo dropzone. Selected files are not actually uploaded)</p>
    </div>
  )
}

export default MyDropzone
