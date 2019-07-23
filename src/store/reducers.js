const initState = {
    chartData: null,
    loading: true,
    error: null
}

const chartReducer = (state = initState, action) => {

    switch(action.type){
        case 'CHART_FETCH_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'CHART_FETCH_SUCCESS':
            return{
                ...state,
                chartData: action.chartData,
                loading: false
            }
        case 'CHART_FETCH_ERROR':
            return{
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}

export default chartReducer;