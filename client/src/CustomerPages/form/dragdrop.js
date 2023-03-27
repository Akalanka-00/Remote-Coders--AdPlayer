import { Preview } from '@mui/icons-material';
import React,{useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './dragdrop.css'

function DragDropFiles(){

    const [image,setImage]=useState([]);
    const{getRootProps,getInputProps,isDragactive}=useDropzone({
        accept:"image/*",
        onDrop:(acceptedFiles)=>{
            setImage(
                acceptedFiles.map((upFile)=>Object.assign (upFile,{
                preview:URL.createObjectURL(upFile)
                }))
            )
          }
    })
    return(
        <div className='App'>
            <div  className='dropzone'>
            <header>
<div {...getRootProps()}>
<input {...getInputProps()}/>
{isDragactive ? (
    <p>Drop Image Here</p>
  ) : (
    <>
      {image.length === 0 ? (
        <p>Drag and Drop Image Here || Click here to select image</p>
      ) : null}
    </>
  )}
</div>
<div>
    {image.map((upFile)=>{
        return (
            <div>
            <img src={upFile.preview} style={{width:"150px",height:"150px"}}/>
            </div>
        )
    })}
</div>
            </header>
            </div>
        </div>
    )

}export default DragDropFiles