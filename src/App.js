import React, { useRef, useState } from 'react';
import './App.css';
import printJS from 'print-js'
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// var CloudPrint = require('https://www.google.com/cloudprint/client/cpgadget.js');
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import PrintTest from './testCom'
import { Document, Page } from 'react-pdf';
import Test from './test.pdf'
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
function App() {
  const componentRef = useRef();



  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: "100vh", justifyContent: 'center', alignContent: "center" }}>
      <p style={{ textAlign: 'center' }}>printtest/test.pdf</p>
      <button style={{ height: '25vh' }} type="button" onClick={() => {
        printJS('test.pdf')
      }}>
        test.pdf
      </button>
      <button style={{ height: '25vh' }} type="button" onClick={() => {
        printJS('printtest/test.pdf')
      }}>
        printtest/test.pdf
      </button>
   
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div style={{ display: 'none' }}>
        <PrintTest refData={componentRef} />
      </div>


    </div>
  );
}
const ComponentToPrint = () => {
  return <>

    <div>asdlsadjasdasdas</div>
    <div>asdlsadjasdasdas</div>
    <div>asdlsadjasdasdas</div>
    <div>asdlsadjasdasdas</div>
  </>

}

export default App;
