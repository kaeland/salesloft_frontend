import React from 'react'

const Table = (props) => {
  const rows = props.frequency.map((letter, index) => {
    return (
      <tr key={index}>
        <td>{letter[0]}</td>
        <td>{letter[1]}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table