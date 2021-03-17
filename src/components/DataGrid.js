import * as React from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'slot13', headerName: 'Slot 1-3', width: 120 },
  { field: 'time', headerName: 'Time', width: 170 }
]

const rows = [
  { id: 1, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 2, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 3, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 4, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 5, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 6, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 7, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 8, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 9, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 10, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 11, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 12, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 13, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 14, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 15, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 16, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 17, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 18, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 19, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 20, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 21, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 22, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 23, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 24, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 25, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 26, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 27, slot13: '777', time: '2021-03-16 18:22:00' },
  { id: 28, slot13: '777', time: '2021-03-16 18:22:00' }
]

export default function DataTable () {
  return (
    <div style={{ height: '600px', width: '100%', paddingTop: '3em' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination
        hideFooter
      />
    </div>
  )
}
