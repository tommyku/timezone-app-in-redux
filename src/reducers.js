const initialState = {
  currentTimezone: 'Asia/Hong_Kong'
};

function timezoneApp(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case 'CHANGE_TIMEZONE':
      return Object.assign({}, state, {
        currentTimezone: action.timezone
      });
    default:
      return state
  }
}

export default timezoneApp;
