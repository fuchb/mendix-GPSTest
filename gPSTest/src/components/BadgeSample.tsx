import { Component, ReactNode, createElement } from "react";
import { Map, Marker } from 'react-amap';
//import Geolocation from '@react-native-community/geolocation';

export class BadgeSample extends Component {
    private position = { center:{longitude: 114.16936109999999 , latitude: 38}};
    constructor(props: any) {
        super(props);
        //this.state = { center:{longitude: 114.16936109999999 , latitude: 38}};
        navigator.geolocation.getCurrentPosition(info => {
            this.position.center.latitude = info.coords.latitude;
            this.position.center.longitude = info.coords.longitude;
        });
    }
    render(): ReactNode {
        return (
            <div style={{width: "100%", height: "100%"}}>
            <Map center={ this.position.center } zoom={8} amapkey={"2939c2e0a6ca3cf3a9d0189b6e41cb59"}>
                <Marker position={this.position.center} />
            </Map>
            </div>
        );
        
    }
}
