import { call, put, takeLatest} from 'redux-saga/effects';
import {fetchData} from './api';

function* fetchChartData(){

    try{
        const chartData = yield call(fetchData);
        yield put({type: 'CHART_FETCH_SUCCESS', chartData: chartData});
    } catch(e){
        yield put({type: 'CHART_FETCH_ERROR', error: e});
    }
}

function* chartSaga() {
    yield takeLatest('CHART_FETCH_REQUEST', fetchChartData);
}

export default chartSaga;