import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'

class TimeInZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      displayDate: moment()
    }
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate() {
    const displayDate = moment();
    this.setState({
      displayDate: displayDate
    });
  }

  componentWillMount() {
    this.setState({
      timeout: setInterval(()=> { this.updateDate() }, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timeout);
  }

  render() {
    return (
      <p>
        <strong>{this.props.timezone}: </strong>
        {this.state.displayDate.tz(this.props.timezone).format()}
        <br />
        <strong>Local: </strong>
        {this.state.displayDate.tz(moment.tz.guess()).format()}
      </p>
    );
  }
}

TimeInZone.propTypes = {
  timezone: PropTypes.string.isRequired
};

export default TimeInZone;
