//The grid represents a 90 x 52 grid of squares
//Each row is a year of life
//Each square is a week of life
import React from "react";
import Square from "./Square";

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weeksLived: this.props.weekDifference,
            lived: false
        }
    }

    initializeGrid = (
        rowCount = 90,
        colCount = 52,
        grid = [],
    ) => {
        if(this.weeksLived == 0) {
            for(let row = 0; row < rowCount; row++) {
                const currentRow = [];
                for(let col = 0; col < colCount; col++) {
                    currentRow.push(<Square lived={false}/>);
                }
                grid.push(currentRow);
            }
        }
        else {
            let weeksCount = 0;
            for(let row = 0; row < rowCount; row++) {
                const currentRow = [];
                for(let col = 0; col < colCount; col++) {
                    if(weeksCount < this.state.weeksLived) {
                        currentRow.push(<Square lived={true}/>);
                        weeksCount++;
                    }
                    else {
                        currentRow.push(<Square lived={false}/>);
                    }
                }
                grid.push(currentRow);
            }
        }
        return grid
    }

    render() {
        return (
            <div className="grid">
                {this.initializeGrid()}
            </div>
        )
    }
}

export default Grid
