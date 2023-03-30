import { Preview } from '@mui/icons-material';
import React,{useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './dragdrop.css'
import {storage} from '../../Custfirebase.js'

function DragDropFiles(){

    const [image,setImage]=useState([]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            const storageRef = storage.ref();
            const fileRef = storageRef.child(`images/${file.name}`);
            await fileRef.put(file);
            setImage(
                acceptedFiles.map((upFile)=>Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    });

    return(
        <div className='App'>
            <div  className='dropzone'>
                <header>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
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
}

export default DragDropFiles
