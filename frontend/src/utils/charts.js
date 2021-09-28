
class ChartUtils {

  constructor(chart_type, category_key, category_name, data_set, limit, config){
    this.chart_type = chart_type
    this.category_key = category_key
    this.category_name = category_name
    this.data_set = data_set
    this.limit = limit
    this.config = config
  }

  buildDataSeries(){
    let series = {'categories': [], 'data': []}

    this.data_set.some((item, index) => {
      let count = item[this.category_key]
      let cat = item[this.category_name]
      if (index + 1 <= this.limit){
        series['categories'].push(cat)
        series['data'].push(count)
      } else return false
    });

    return series
  }

  render(){
    let series = this.buildDataSeries()
    console.log(series)
    return {
      title: {
        text: this.config.chart_title
      },
      chart: {
        type: this.chart_type
      },
      xAxis: {
        categories: series['categories']
      },
      series: [{
        name: this.category_key.replace('_', " ").toUpperCase(),
        data: series['data'],
        color: this.config.series_color
      }]
    }
  }

}

export {ChartUtils}