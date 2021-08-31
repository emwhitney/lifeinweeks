//Each square 
//Could be a functional component (leaner)
//CSS: give each square a border
    //Each row has a class and each square has a class
    //Square display in-line (display horizontally)

import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lived: this.props.lived
        };
    }

    makeClassNameForSquare() {
        if(this.state.lived) {return 'filledSquare'}
        else {return 'emptySquare'}
    }

    render() {
        return (
            <div className={this.makeClassNameForSquare()}></div>
        ) 
    }
}

export default Square


