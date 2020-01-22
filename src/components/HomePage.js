import React from 'react'
import { connect } from 'react-redux'
import { startSetPeople } from '../redux/actions/people'
import { sortEmailByLetterFrequency, comparePeople } from '../utils/utils'
import Table from './Table'

class HomePage extends React.Component {
  state = { 
    showFrequency: false,
    showDuplicates: false 
  }

  componentDidMount() {
    if (localStorage.getItem("jwt") !== null) {
      this.props.startSetPeople()
    }
  }

  renderPeople = () => {
    let { data } = this.props.people
    return data.map(({ first_name, last_name, email_address, title }) => {
      return (
        <li>
          {this.state.showFrequency === true ? this.renderTable(email_address) 
            : this.state.showDuplicates === true ? this.renderDuplicates(data)
            : (
              <div>
                <p>Name: {first_name} {last_name}</p>
                <p>Title: {title}</p>
                <p>Email: {email_address}</p>
              </div>
            )
          }
        </li>
      )
    })
  }

  renderTable = (email) => {
    const frequency = sortEmailByLetterFrequency(email)
    return <Table frequency={frequency} />
  }

  renderDuplicates = (data) => {
    const duplicates = comparePeople(data) 
    return <p>Duplicates...</p>
  }

  toggleFrequency = () => {
    this.setState({
      showFrequency: !this.state.showFrequency, 
      showDuplicates: false 
    })
  }

  toggleDuplicates = () => {
    this.setState({
      showFrequency: false, 
      showDuplicates: !this.state.showDuplicates
    })
  }

  showPeople = () => {
    this.setState({
      showFrequency: false,
      showDuplicates: false 
    })
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.showPeople}>
          Show People
        </button>
        <button onClick={this.toggleFrequency}>
          Toggle Frequency
        </button>
        <button onClick={this.toggleDuplicates}>
          Toggle Duplicates
        </button>
        {this.props.people.data && (
          <ul>
            {this.renderPeople()}
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