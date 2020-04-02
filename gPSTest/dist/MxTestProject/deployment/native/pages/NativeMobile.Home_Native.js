import { createElement } from "react";
const React = { createElement };

import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Container } from "mendix/Container";
import { mendix_gpstest_GPSTest } from "externalWidgets";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/theme/styles.js";

const { $Container, $Text, $mendix_gpstest_GPSTest } = asPluginWidgets({ Container, Text, mendix_gpstest_GPSTest });

const placeholder$Main = () => [
    <$Container key="0_0"
        $widgetId="0_0"
        name="container5"
        style={StyleProperty({
            styles: [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
        })}
        onClick={undefined}
        content={[
            <$Container key="0_1"
                $widgetId="0_1"
                name="container6"
                style={StyleProperty({
                    styles: [ styles.Container, styles.spacingOuterBottomSmaller ]
                })}
                onClick={undefined}
                content={[
                    <$Text key="0_2"
                        $widgetId="0_2"
                        name="text7"
                        style={StyleProperty({
                            styles: [ styles.Text, styles.TextHeading1, styles.h1 ]
                        })}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Go make it!" ] ] ), "friendlyId": "NativeMobile.Home_Native.text7" }
                        })} />
                ]} />,
            <$Container key="0_3"
                $widgetId="0_3"
                name="container7"
                style={StyleProperty({
                    styles: [ styles.Container, styles.flexRow ]
                })}
                onClick={undefined}
                content={[
                    <$mendix_gpstest_GPSTest key="0_4"
                        $widgetId="0_4"
                        name="gPSTest1"
                        style={StyleProperty({
                            styles: [ styles.mendix_gpstest_GPSTest ]
                        })} />,
                    <$Text key="0_5"
                        $widgetId="0_5"
                        name="text11"
                        style={StyleProperty({
                            styles: [ styles.Text, styles.h1, styles.textLight, styles.textLarge, styles.textCenter ]
                        })}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Make changes, run locally, preview." ] ] ), "friendlyId": "NativeMobile.Home_Native.text11" }
                        })} />
                ]} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

