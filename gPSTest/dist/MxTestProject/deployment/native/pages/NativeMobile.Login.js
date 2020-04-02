import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/theme/styles.js";

const { $Container, $DataView, $TextBox, $Text, $Button } = asPluginWidgets({ Container, DataView, TextBox, Text, Button });

const placeholder$Main = () => [
    <$Container key="0_0"
        $widgetId="0_0"
        name="container4"
        style={StyleProperty({
            styles: [ styles.Container, styles.spacingInnerTopLarger, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.spacingInnerBottomLarger ]
        })}
        onClick={undefined}
        content={[
            <$DataView key="0_1"
                $widgetId="0_1"
                name="dataView2"
                style={StyleProperty({
                    styles: [ styles.DataView, styles.spacingOuterTopMedium ]
                })}
                object={NanoflowObjectProperty({
                    source: { "nanoflow": () => require("E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/deployment/native/nanoflows/NativeMobile.DSS_CreateLoginContext").DSS_CreateLoginContext },
                    argMap: {},
                    friendlyId: "NativeMobile.Login.dataView2"
                })}
                content={[
                    <$TextBox key="0_2"
                        $widgetId="0_2"
                        name="textBox3"
                        style={StyleProperty({
                            styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                        })}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"horizontal"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Username",
                            friendlyId: "NativeMobile.Login.textBox3",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "A valid email address is required." ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "Username" ] ] ) }
                        })}
                        label={undefined}
                        maxLength={200}
                        keyboardType={"default"}
                        onEnterKeyPress={undefined} />,
                    <$TextBox key="0_3"
                        $widgetId="0_3"
                        name="textBox4"
                        style={StyleProperty({
                            styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                        })}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"horizontal"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Password",
                            friendlyId: "NativeMobile.Login.textBox4",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "A password is required." ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={true}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "Password" ] ] ) }
                        })}
                        label={undefined}
                        maxLength={200}
                        keyboardType={"default"}
                        onEnterKeyPress={undefined} />,
                    <$Text key="0_4"
                        $widgetId="0_4"
                        name="text6"
                        style={StyleProperty({
                            styles: [ styles.Text, styles.textPrimary, styles.textSemiBold, styles.spacingOuterBottomMedium, styles.textSmall ]
                        })}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Forgot Password?" ] ] ), "friendlyId": "NativeMobile.Login.text6" }
                        })} />,
                    <$Button key="0_5"
                        $widgetId="0_5"
                        name="actionButton2"
                        style={StyleProperty({
                            styles: [ styles.ActionButton ]
                        })}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Login" ] ] ), "friendlyId": "NativeMobile.Login.actionButton2" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "Login": { "widget": "0_1", "source": "object" } }, "config": { "nanoflow": () => require("E:/workspace/src/mendix/GPSTest-Native/mendix-GPSTest/gPSTest/dist/MxTestProject/deployment/native/nanoflows/NativeMobile.ACT_SignInUser").ACT_SignInUser } },
                            abortOnServerValidation: false,
                            friendlyId: "On click at NativeMobile.Login.actionButton2"
                        })}
                        disabledDuringAction={true} />,
                    <$Container key="0_6"
                        $widgetId="0_6"
                        name="container3"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.flexRow, styles.justifyContentCenter, styles.alignChildrenEnd, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Text key="0_7"
                                $widgetId="0_7"
                                name="text4"
                                style={StyleProperty({
                                    styles: [ styles.Text, styles.spacingOuterRightSmaller, styles.textSmall, styles.textContrastHigh ]
                                })}
                                text={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Don't have an account yet?" ] ] ), "friendlyId": "NativeMobile.Login.text4" }
                                })} />,
                            <$Text key="0_8"
                                $widgetId="0_8"
                                name="text5"
                                style={StyleProperty({
                                    styles: [ styles.Text, styles.textPrimary, styles.textSemiBold, styles.textSmall ]
                                })}
                                text={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Sign up" ] ] ), "friendlyId": "NativeMobile.Login.text5" }
                                })} />
                        ]} />
                ]} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Login"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

