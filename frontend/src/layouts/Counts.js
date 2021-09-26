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
  console.log('items', items)

  return (
    <div className="row">
        {items.map((item, index) => {
          return (
            <div className="col-sm-12 col-md-3" key={index}>
              <StatsItem title={item.title} count={item.count} />
            </div>
          )
        })}
    </div>

    // <div className="card">
    //   <div className="card-header">
    //     Featured
    //   </div>
    //   <ul className="list-group list-group-flush">
    //     {items.map((item, index) => {
    //       return (
    //         <li className="list-group-item" key={index}>
    //           <StatsItem title={item.title} count={item.count} />
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
  )
}



export {StatsList, StatsItem}