import { createSelector } from 'reselect';

const getChart = (state) => state.chartData;

export const getChartState = createSelector(
    [getChart],
    (chartData) => chartData
)

const getLoading = (state) => state.loading;

export const getLoadingState = createSelector(
    [getLoading],
    (loading) => loading
)