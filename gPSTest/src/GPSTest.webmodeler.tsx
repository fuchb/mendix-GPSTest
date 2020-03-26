import { Component, ReactNode, createElement } from "react";
import { BadgeSample } from "./components/BadgeSample";
import { GPSTestPreviewProps } from "../typings/GPSTestProps";

declare function require(name: string): string;

export class preview extends Component<GPSTestPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <BadgeSample {...this.transformProps(this.props)}></BadgeSample>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    private transformProps(props: GPSTestPreviewProps) {
        return {
            className: props.class,
            clickable: false,
            style: props.styleObject
        };
    }
}

export function getPreviewCss(): string {
    return require("./ui/GPSTest.css");
}
