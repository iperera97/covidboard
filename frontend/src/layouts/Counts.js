import React from "react";


const StatsItem = (props) => {
  let count = props.count
  return (
    <div className="card">
      <div className={`card-header text-center ${props.css}`}>
        <h6 style={{color: 'white'}}>{props.title}</h6>
      </div>
      <div className="card-body text-center">
        <h3>{(count)? count.toLocaleString("en-US"): '---'}</h3>
      </div>
    </div>
  )
}


const StatsList = (props) => {
  let items = props.items || []

  return (
    <div className="row m-3">
        <div className="col-sm-12">
          <h6 style={{textAlign: 'left',margin: '10px'}}>{props.title} - last updated at {props.updated_time}</h6>
        </div>
        {items.map((item, index) => {
          return (
            <div className="col-sm-12 col-md-3" key={index}>
              <StatsItem title={item.title} count={item.count} css={item.css}/>
            </div>
          )
        })}
    </div>
  )
}



export {StatsList, StatsItem}