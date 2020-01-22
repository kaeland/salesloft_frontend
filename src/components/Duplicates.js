import React from 'react'

const Duplicates = (props) => {
  return (
    <div>
      {handleDuplicates(props.duplicates)}
    </div>
  )
}

const handleDuplicates = (duplicates) => {
  return duplicates.map((duplicate) => {
    let firstPerson = duplicate[0]
    let secondPerson = duplicate[1]
    return (
      <div className="box" key={duplicate[0].id}>
        <h2>Possible Duplicate:</h2>
        <p>{firstPerson.first_name} {firstPerson.last_name} has a similar email address to {secondPerson.first_name} {secondPerson.last_name}</p>
        <p>{firstPerson.first_name} {firstPerson.last_name}'s email address is: <strong>{firstPerson.email_address}</strong></p>
        <p>{secondPerson.first_name} {secondPerson.last_name}'s email address is: <strong>{secondPerson.email_address}</strong></p>
      </div>
    )
  })
}

export default Duplicates