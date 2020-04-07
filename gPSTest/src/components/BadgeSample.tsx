import { Component, ReactNode, createElement } from "react";
import {  View } from "react-native";

import Geolocation from '@react-native-community/geolocation';

export class BadgeSample extends Component {
    private position = { center:{longitude: 114.16936109999999 , latitude: 38}};
    constructor(props: any) {
        super(props);
        //this.state = { center:{longitude: 114.16936109999999 , latitude: 38}};
        //navigator.geolocation.getCurrentPosition(info => {
        Geolocation.getCurrentPosition(info => {
            this.position.center.latitude = info.coords.latitude;
            this.position.center.longitude = info.coords.longitude;
            alert("現在位置：経度：" + info.coords.longitude + "緯度：" + info.coords.latitude);
        });
    }
    render(): ReactNode {

        return (
            <View>
            </View>
        );
    }
}
