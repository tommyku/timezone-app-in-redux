import TimeInZone from './TimeInZone'
import { connect } from 'react-redux'

const mapStateToProps = ({currentTimezone})=> {
  return { timezone: currentTimezone };
}

const mapDispatchToProps = (dispatch)=> {return {}};

const ContainerTimeInZone = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeInZone);

export default ContainerTimeInZone;

