import * as React from "react";

const UP = -1
const DOWN = 1

class FruitList extends React.Component {
    render() {
        const {fruitList, onMove} = this.props

        return (
            <ul>
                {fruitList.map((item) =>
                                   <li key={item.id} style={{ backgroundColor: item.bgColor }}>
                                       <div className="fruitsId">{item.id}</div>
                                       <div className="fruitsName">{item.name}</div>
                                       <div className="fruitsArrows">
                                           <a onClick={() => onMove(item.id, UP)}>&#x25B2;</a>
                                           <a onClick={() => onMove(item.id, DOWN)}>&#x25BC;</a>
                                       </div>
                                   </li>
                )}
            </ul>
        );
    }
}


   


