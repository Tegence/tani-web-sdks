import { VidWebCamProps } from '../../types/WebcamTypes';
export interface WebcamRef {
    close_camera: () => void;
}
declare const VidWebCam: import("react").ForwardRefExoticComponent<VidWebCamProps & import("react").RefAttributes<unknown>>;
export default VidWebCam;
