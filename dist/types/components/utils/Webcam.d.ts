import React from "react";
import { WebCamProps } from '../../types/WebcamTypes';
export interface WebcamRef {
    close_camera: () => void;
}
declare const WebCamComponent: React.ForwardRefExoticComponent<WebCamProps & React.RefAttributes<unknown>>;
export default WebCamComponent;
