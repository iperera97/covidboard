import React from "react";
import axios from "axios";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {ChartUtils} from "../utils/charts.js"
 
const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

class LkChart extends React.Component {

  endpoint = "https://hpb.health.gov.lk/api/get-statistical-history-data"

  constructor(props){
    super(props)
    this.state = {'data': []}
  }

  componentDidMount(){
    this.getStatics()
  }

  async getStatics(){
    let http = await axios.get(this.endpoint)
    this.setState({data: http.data.data})
  }

  getCovidCaseProgress(){
    let chart = new ChartUtils(
    'column', 'cases_count', 'date',
      this.state.data, 14, {
        title: 'Daily Covid Case Progress',
        series_color: "#4e6bffba"
      }
    )
    return chart.render()
  }

  getDeathProgress(){
    let chart = new ChartUtils(
      'line', 'deaths_count', 'date',
      this.state.data, 14, {
        title: 'Daily Death Count Progress',
        series_color: "#ff8484"
      }
    )
    return chart.render()
  }

  getRecorverdProgress(){
    let chart = new ChartUtils(
      'column', 'recoveries_count', 'date',
      this.state.data, 14, {
        title: 'Daily Recovered Count Progress',
        series_color: "#79ca53"
      }
    )
    return chart.render()
  }

  render(){
    let covidProgresChart_1 = null
    let covidDeathChart_1 = null
    let covidRecorverdChart_1 = null

    if (this.state.data.length != 0){
      covidProgresChart_1 = this.getCovidCaseProgress()
      covidDeathChart_1 = this.getDeathProgress()
      covidRecorverdChart_1 = this.getRecorverdProgress()
    }

    return (
      <div className="row m-2">
        {/* covid progress chart goes here */}
        <div className="col-sm-12 col-md-6">
          {(covidProgresChart_1)?
            <HighchartsReact
              highcharts={Highcharts}
              options={covidProgresChart_1} />: null
          }
        </div>

        {/* covid recovered chart goes here */}
        <div className="col-sm-12 col-md-6">
          {(covidRecorverdChart_1)?
            <HighchartsReact
              highcharts={Highcharts}
              options={covidRecorverdChart_1} />: null
          }
        </div>

        <div className="m-2"></div>

        {/* covid death chart goes here */}
        <div className="col-sm-12">
          {(covidDeathChart_1)?
            <HighchartsReact
              highcharts={Highcharts}
              options={covidDeathChart_1} />: null
          }
        </div>      
        
        <div className="m-1"></div>
      </div>
    )
  }
}

export default LkChart