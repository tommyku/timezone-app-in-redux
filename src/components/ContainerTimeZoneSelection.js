import TimeZoneSelection from './TimeZoneSelection'
import { connect } from 'react-redux'

const mapStateToProps = ({currentTimezone})=> {
  return { currentTimezone: currentTimezone };
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onChange: (value)=> {
      dispatch({
        type: 'CHANGE_TIMEZONE',
        timezone: value
      });
    }
  }
};

const ContainerTimeZoneSelection = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeZoneSelection);

export default ContainerTimeZoneSelection;

