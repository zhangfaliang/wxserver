export const testSagaActionType = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR',
  LOAD_DATA_START: 'LOAD_DATA_START',
  LOAD_DATA_STOP:'LOAD_DATA_STOP'

}

export const loadData = () => ({ type: testSagaActionType.LOAD_DATA })
export const loadDataSuccess = (data) => ({ type: testSagaActionType.LOAD_DATA_SUCCESS, data })
export const loadDataError = (err) => ({ type: testSagaActionType.LOAD_DATA_ERROR, err })
export const loadDataStop = () => ({ type: testSagaActionType.LOAD_DATA_STOP })
export const loadDataStart = () => ({ type: testSagaActionType.LOAD_DATA_START })


