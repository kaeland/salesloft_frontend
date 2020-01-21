import React from 'react'

const Table = (props) => {
  const rows = props.frequency.map((letter) => {
    return (
      <tr>
        <td>{letter[0]}</td>
        <td>{letter[1]}</td>
      </tr>
    )
  })
  return (
    <table>
      <tr>
        <th>Character</th>
        <th>Count</th>
      </tr>
      {rows}
    </table>
  )
}

export default Table