import React from 'react'
import axios from 'axios'
import {StatsList} from '../layouts/Counts'


class LkStats extends React.Component {

  endpoint = "https://raw.githubusercontent.com/iperera97/covidboard/master/backend/db/lk-stats-2021-09-26.json"

  constructor(props){
    super(props)
    this.state = {
      statistics: null,
    }
  }

  componentDidMount(){
    this.getStats()
  }

  async getStats(){
    let http = await axios.get(this.endpoint)
    let data = http.data
    this.setState({statistics: data})
  }

  getTotalStats(){
    return [
      {'title': 'Total Confirmed Cases', 'count': this.state.statistics.local_total_cases},
      {'title': 'Deaths', 'count': this.state.statistics.local_deaths},
      {'title': 'Recovered', 'count': this.state.statistics.local_recovered},
      {'title': 'Total PCR Testing', 'count': this.state.statistics.total_pcr_testing_count},
    ]
  }

  render(){
    return (
      <div>
        {/* total statics goes here */}
        {(this.state.statistics)? <StatsList items={this.getTotalStats()} />: null}

        {/* daily statics goes here */}
      </div>
    )
  }

}

export default LkStats