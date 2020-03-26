import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { BadgeSample } from "./components/BadgeSample";

class GPSTest extends Component {
    render(): ReactNode {
        return (
            <BadgeSample/>
            
        );
    }
}

export default hot(GPSTest);
