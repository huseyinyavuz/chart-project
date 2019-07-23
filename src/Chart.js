import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {
    
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount(){
        
        var avg = 'Facebook Average | ' + this.props.average.toString();
        var labels = Array(this.props.male.length).fill().map((x,i)=>i);

        this.chart = new Chart(this.chartRef.current.getContext("2d"),{
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "female",
                        data: this.props.female,
                        backgroundColor: 'rgba(66, 233, 245, 0.6)',
                        pointRadius: 0
                    },
                    {
                        label: 'male',
                        data: this.props.male,
                        backgroundColor: 'rgba(44, 166, 242, 0.8)',
                        pointRadius: 0
                    }
                ]
            },
            options: {
                scales: {
                    xAxes:[{
                        ticks: {display: false}
                    }],
                    yAxes:[{
                        ticks: {
                            max: this.props.max,
                            callback: function(value, index, values){
                                var minVal = Math.min(...values);
                                var maxVal = Math.max(...values);
                                
                                if (value === maxVal) return value + '%';
                                else if (value === minVal) return value;
                                else return '';
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Viewership'
                        }
                    }],
                },
                tooltips: {
                    callbacks: {
                        title: function(){
                            return avg;
                        },
                        label: function(){
                            return null;
                        }
                    },
                    intersect: false,
                    mode: 'nearest'
                },
                legend: {display: false}
                
            }
        });

    
    }

    render(){
        
        return(
            <div>
                <canvas ref={this.chartRef}/>
            </div>
        );
        
    }
}

export default LineChart;