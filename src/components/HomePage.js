import React from 'react'
import { connect } from 'react-redux'
import { startSetPeople } from '../redux/actions/people'
import { sortEmailByLetterFrequency, comparePeople } from '../utils/utils'
import Table from './Table'
import Duplicates from './Duplicates'

class HomePage extends React.Component {
  state = {
    showFrequency: false,
    showDuplicates: false, 
    title: "See people below..."
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
              <div className="box">
                <p> <strong>Name:</strong> {first_name} {last_name}</p>
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Email:</strong> {email_address}</p>
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
      showDuplicates: false, 
      title: !this.state.showFrequency === true ? "Frequency of characters in person's email..." : "See people below..."
    })
  }

  toggleDuplicates = () => {
    this.setState({
      showFrequency: false,
      showDuplicates: !this.state.showDuplicates, 
      title: !this.state.showDuplicates === true ? "Possible duplicates below..." : "See people below..."
    })
  }

  showPeople = () => {
    this.setState({
      showFrequency: false,
      showDuplicates: false, 
      title: "See people below..."
    })
  }

  renderTitle = (data) => {
    
  }

  render() {
    let data = this.props.people.data
    let title = data ? this.state.title : "Sign up or Login to see people below..."
    return (
      <div>
        <div className="section">
          <div className="buttons">
            <button className="button is-primary is-outlined" onClick={this.showPeople}>
              Show People
            </button>
            <button className="button is-info is-outlined" onClick={this.toggleFrequency}>
              Toggle Frequency
            </button>
            <button className="button is-info is-outlined" onClick={this.toggleDuplicates}>
              Toggle Duplicates
            </button>
          </div>
        </div>
        <div className="section page-title ">
          <h2 className="is-size-4">
            {title}
          </h2>
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