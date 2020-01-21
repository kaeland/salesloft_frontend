import React from 'react'
import { connect } from 'react-redux'
import { startSetPeople } from '../redux/actions/people'

class HomePage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("jwt") !== null) {
      this.props.startSetPeople()
    }
  }

  renderPeople = () => {
    let { data } = this.props.people
    data.map(({ first_name, last_name, email_address, title }) => {
      return (
        <li>
          <p>Name: `${first_name} ${last_name}`</p>
          <p>Title: `${title}`</p>
          <p>Email: `${email_address}`</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.people.data && (
          <ul>
            {this.props.people.data.map(({ first_name, last_name, email_address, title }) => {
              return (
                <li>
                  <p>Name: {first_name} {last_name}</p>
                  <p>Title: {title}</p>
                  <p>Email: {email_address}</p>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

export default connect(mapStateToProps, { startSetPeople })(HomePage);