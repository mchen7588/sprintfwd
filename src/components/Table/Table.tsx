import { Link } from 'react-router-dom'

import "./Table.css"

type rowItem = {
  text: string;
  url?: string;
}

function TableRow(props: {rowData: rowItem[]}) {
  return (
    <tr className="table-row">
      {
        props.rowData.map((rowItemData: rowItem, index: number) => (
          <td key={index} className="table-row-item">
            {
              rowItemData.url ? <Link key={index} to={rowItemData.url}>{rowItemData.text}</Link> : <>{rowItemData.text}</>
            }
          </td>
        ))
      }
    </tr>
  )
}

type TableProps = {
  headerData: string[],
  rowDataList: rowItem[][],
}

function Table(props: TableProps) {
  return (
    <table className="table-wrapper">
      <thead>
        <tr className="table-header">
          {
            props.headerData.map((headerItemData: string, index: number) => <th key={index} className="table-header-item">{headerItemData}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          props.rowDataList.map((rowData: rowItem[], index: number) => <TableRow key={index} rowData={rowData} />)
        }
      </tbody>
    </table>
  )
}

export default Table
