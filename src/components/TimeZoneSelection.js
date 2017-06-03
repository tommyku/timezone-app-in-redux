import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'

class TimeZoneSelection extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange(this.refs['select'].value);
  }

  render() {
    return (
      <div>
        <select onChange={(e)=> this.onChange(e)}
          ref='select'
          defaultValue={this.props.currentTimezone}>
          {
            moment.tz.names().map((item, index)=> <option key={index} value={item}>{item}</option>)
          }
        </select>
      </div>
    );
  }
}

TimeZoneSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentTimezone: PropTypes.string.isRequired
}

export default TimeZoneSelection;
