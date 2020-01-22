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
    <div className="box">
      <table className="table is-bordered is-striped is-fullwidth">
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
    </div>
  )
}

export default Table