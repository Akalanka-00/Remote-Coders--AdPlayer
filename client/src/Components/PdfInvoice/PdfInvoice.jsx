import React from 'react'

import { Button } from 'react-bootstrap';

function generatePDF(){

}
const PdfInvoice = () => {
  return (
    <div>
      <Button onClick={()=>{
        generatePDF()
      }}>Generate pdf</Button>
    </div>
  )
}

export default PdfInvoice
