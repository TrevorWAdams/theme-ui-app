import React from "react"
import "@progress/kendo-theme-default/dist/all.css"
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid"

const DataGrid = ({data}) => {
  return (
  <Grid data={data}>
    <GridToolbar>
      <div>
        <button title="Add new" className="k-button">
          Add new
        </button>
      </div>
    </GridToolbar>
    <Column field="rfiName" title="RFI name" />
    <Column field="rfiNumber" title="RFI name" />
  </Grid>
  )
}

export default DataGrid
