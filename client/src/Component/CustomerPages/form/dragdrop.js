import { useRef, useState } from "react"
import'./dragdrop.css'
const DragDropFiles=()=>{
    const[files,setFiles]=useState(null);
    const inputRef=useRef();
    const handleDragOver=(event)=>{
event.preventDefault();
    }
    const handleDrop=(event)=>{
        event.preventDefault();
    }
    const handleUpload=()=>{

    };
    if(files)return(
        <div className="uploads">
            <ul>
                {Array.from(files).map((file,idx)=><li key={idx}>
                    {file.name}
                </li>)}
            </ul>
            <div className="actions">
                <button onClick={()=>setFiles(null)}>Cancel</button>
                <button onClick={(handleUpload)}>Upload</button>

            </div>
        </div>
    )
    return(
<>
{!files&&(
    <div className="dropzone" onChange={handleDragOver} onDrop={handleDrop}>
        <h1>Drag and Drop Image</h1>
        <h1>Or</h1>
        <input type="file" onChange={(event)=>setFiles(event.target.files)} hidden
        ref={inputRef}/>
        <button onClick={()=>inputRef.current.click()}>Select Files</button>
    </div>
)

}
</>
    )
}
export default DragDropFiles