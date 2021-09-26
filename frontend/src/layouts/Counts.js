import React from "react";


const StatsItem = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>{props.title}</p>
      </div>
      <div className="card-body">
        <p>{props.count}</p>
      </div>
    </div>
  )
}


const StatsList = (props) => {
  let items = props.items || []

  return (
    <div className="row">
        <div className="col-sm-12">
          <p>{props.title}</p>
        </div>
        {items.map((item, index) => {
          return (
            <div className="col-sm-12 col-md-3" key={index}>
              <StatsItem title={item.title} count={item.count} />
            </div>
          )
        })}
        <div className="col-sm-12">
          <p>Last updated at {props.updated_time}</p>
        </div>
    </div>
  )
}



export {StatsList, StatsItem}