import { put } from 'redux-saga/effects'
import ApiCall from 'api'
import { saveResponseData, saveResponseError } from 'state/Response'

export default function* rootSaga(api) {
  const response = yield ApiCall()
  if (response.data) {
    yield put(saveResponseData(response.data))
  } else {
    yield put(saveResponseError([]))
  }
}
