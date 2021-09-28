import React from 'react'
import axios from 'axios'
import {StatsList} from '../layouts/Counts'


class LkStats extends React.Component {

  endpoint = "https://raw.githubusercontent.com/iperera97/covidboard/master/backend/db/lk-stats-2021-09-26.json"

  constructor(props){
    super(props)
    this.state = {
      statistics: null,
      statistics_updated_time: null
    }
  }

  componentDidMount(){
    this.getStats()
  }

  async getStats(){
    let http = await axios.get(this.endpoint)
    let data = http.data
    this.setState({
      statistics: data,
      statistics_updated_time: data.update_date_time
    })
  }

  getTotalStats(){
    return [
      {'title': 'Confirmed Cases', 'count': this.state.statistics.local_total_cases, css: 'blue'},
      {'title': 'Deaths', 'count': this.state.statistics.local_deaths, css: 'red'},
      {'title': 'Recovered', 'count': this.state.statistics.local_recovered, css: 'green'},
      {'title': 'PCR Testing', 'count': this.state.statistics.total_pcr_testing_count, css: 'orange'},
    ]
  }

  getDailyStats(){
    return [
      {'title': 'Cases', 'count': this.state.statistics.local_new_cases, css: 'blue'},
      {'title': 'Deaths', 'count': this.state.statistics.local_new_deaths, css: 'red'},
      {'title': 'Active Cases', 'count': this.state.statistics.local_active_cases, css: 'green'},
      {'title': 'PCR Testing', 'count': this.state.statistics.daily_pcr_testing_data[0].pcr_count, css: 'orange'},
    ]
  }

  render(){
    return (
      <div>
        {/* total statics goes here */}
        {(this.state.statistics)? (
          <StatsList
            title="Total Figures (SL)"
            items={this.getTotalStats()}
            updated_time={this.state.statistics_updated_time}
          />): null
        }

        {/* daily statics goes here */}
        {(this.state.statistics)? (
          <StatsList
            title="Daily Figures (SL)"
            items={this.getDailyStats()}
            updated_time={this.state.statistics_updated_time}
          />): null
        }
      </div>
    )
  }

}

export default LkStats