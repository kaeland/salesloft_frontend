import React from 'react'
import { connect } from 'react-redux'
import { startSetPeople } from '../redux/actions/people'

class HomePage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("jwt") !== null) {
      this.props.startSetPeople()
    }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.people.data && <p>People data...</p>}
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

export default connect(mapStateToProps, { startSetPeople })(HomePage);