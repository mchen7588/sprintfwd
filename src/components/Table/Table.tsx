import "./Table.css";

function TableRow(props: {rowData: string[]}) {
  return (
    <tr className="table-row">
      {
        props.rowData.map((rowItemData: string, index: number) => <td key={index} className="table-row-item">{rowItemData}</td>)
      }
    </tr>
  )
}

type TableProps = {
  headerData: string[],
  rowDataList: string[][],
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
          props.rowDataList.map((rowData: string[], index: number) => <TableRow key={index} rowData={rowData} />)
        }
      </tbody>
    </table>
  )
}

export default Table
