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
      <div>
        <h2>Possible Duplicate:</h2>
        <p>{firstPerson.first_name} {firstPerson.last_name} has a similar email address to {secondPerson.first_name} {secondPerson.last_name}</p>
        <p>{firstPerson.first_name} {firstPerson.last_name}'s email address is: {firstPerson.email_address}</p>
        <p>{secondPerson.first_name} {secondPerson.last_name}'s email address is: {secondPerson.email_address}</p>
      </div>
    )
  })
}

export default Duplicates