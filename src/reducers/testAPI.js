import { testSagaActionType } from "../actions/testAPI";


function testAPI(state = {
  loading: false,
  data: {},
  err: ''
}, action) {
  switch (action.type) {
    case testSagaActionType.LOAD_DATA:
      return {
        ...state,
        loading: true
      };
    case testSagaActionType.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case testSagaActionType.LOAD_DATA_ERROR:
      return {
        ...state,
        loading: false,
        err:action.err
      }
    default:
     return  state
  }
}

export default testAPI