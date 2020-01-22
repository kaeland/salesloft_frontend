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
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Here's a possible duplicate:</strong>
                <br />
                "{firstPerson.first_name} {firstPerson.last_name}" has a similar email address to "{secondPerson.first_name} {secondPerson.last_name}". {firstPerson.first_name} {firstPerson.last_name}'s email address is <strong>{firstPerson.email_address}</strong>, and {secondPerson.first_name} {secondPerson.last_name}'s email address is <strong>{secondPerson.email_address}</strong>.
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  })
}

export default Duplicates