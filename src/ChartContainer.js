import React from 'react';
import { connect } from 'react-redux';
import { getChartData } from './store/actions';
import { getChartState, getLoadingState } from './store/selectors';
import LineChart from './Chart';
import Loader from 'react-loader-spinner';

class ChartContainer extends React.Component{

    componentDidMount(){
        this.props.getChartData();
    }

    render(){
        console.log(this.props);
        if(!this.props.loading && this.props.chartData){
            const data = this.props.chartData[0];
            const max = Math.max(...[Math.max(...data.male), Math.max(...data.female)]);
            const maxData = Math.ceil(max + (max/10));
            return(
                <div>
                    <LineChart female={data.female} male={data.male} average={data.average} max={maxData}/>
                </div>

            );
        }
        else return <Loader type='Bars'/>;
    }

}

const mapDispatchToProps = {
    getChartData: getChartData
}

const mapStateToProps = state => ({
    chartData: getChartState(state),
    loading: getLoadingState(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(ChartContainer);