function TableRow(props: {rowData: string[]}) {
  return (
    <tr>
      {
        props.rowData.map((rowItemData: string) => <td>{rowItemData}</td>)
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
    <table>
      <thead>
        <tr>
          {
            props.headerData.map((headerItemData: string) => <th>{headerItemData}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          props.rowDataList.map((rowData: string[]) => <TableRow rowData={rowData} />)
        }
      </tbody>
    </table>
  )
}

export default Table
