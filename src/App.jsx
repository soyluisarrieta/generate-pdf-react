import { useState } from 'react'

import { Button } from 'react-bootstrap'
import { PDFViewer } from '@react-pdf/renderer'

import { Table } from './components/Table'
import { TablePDF } from './components/TablePDF'

const COLUMNS = [
  'title',
  'description',
  'price',
  'quantity'
]

const ROWS = [
  [
    'Tablet',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$5000',
    '3'
  ],
  [
    'TV',
    'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$16000',
    '1'
  ],
  [
    'Portatil',
    'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$20000',
    '2'
  ],
  [
    'PC Desktop',
    'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$50000',
    '1'
  ]
]

function App () {
  const [viewPDF, setViewPDF] = useState(false)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center'>
        <Button onClick={() => setViewPDF(!viewPDF)}>
          {viewPDF ? 'Ocultar PDF' : 'Ver PDF'}
        </Button>
      </nav>

      {
        viewPDF
          ? (
            <PDFViewer style={{ width: '100%', height: '90vh' }}>
              <TablePDF columns={COLUMNS} rows={ROWS} />
            </PDFViewer>
            )
          : <Table columns={COLUMNS} rows={ROWS} />
      }
    </>
  )
}

export default App
