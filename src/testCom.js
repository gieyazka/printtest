import React from 'react'
import { PDFReader } from 'react-read-pdf'
import Test from './test.pdf'

const PrintTest = (props) => {
    return <div ref={props.refData}>
            <PDFReader url={Test} />

    </div>
}

export default PrintTest