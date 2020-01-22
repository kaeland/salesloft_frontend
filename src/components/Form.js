import React from 'react'

const Form = (props) => {
  return (
    <div className="container">
      <div className="section page-title ">
        <h2 className="is-size-4">{props.pageTitle}</h2>
      </div>
      <div className="section">
        <form className="box" onSubmit={props.handleSubmit}>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default Form