import React from 'react'
import { connect } from 'react-redux'
import { startSetPeople } from '../redux/actions/people'
import { sortEmailByLetterFrequency, comparePeople } from '../utils/utils'
import Table from './Table'
import Duplicates from './Duplicates'

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
    return data.map(({ id, first_name, last_name, email_address, title }) => {
      return (
        <li key={id}>
          {this.state.showFrequency === true 
            ? this.renderTable(email_address) 
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
    return <Duplicates duplicates={duplicates} />
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
    let data = this.props.people.data
    return (
      <div>
        <div className="section">
          <button className="button" onClick={this.showPeople}>
            Show People
          </button>
          <button className="button" onClick={this.toggleFrequency}>
            Toggle Frequency
          </button>
          <button className="button" onClick={this.toggleDuplicates}>
            Toggle Duplicates
          </button>
        </div>
        <div className="section">
          {data && (
            <ul>
              {this.state.showDuplicates === true 
                ? this.renderDuplicates(data) 
                : this.renderPeople()
              }
            </ul>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return { people }
}

export default connect(mapStateToProps, { startSetPeople })(HomePage);