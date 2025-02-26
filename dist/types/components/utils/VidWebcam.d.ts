import { VidWebCamProps } from '../../types/WebcamTypes';
export interface WebcamRef {
    close_camera: () => void;
}
declare const VidWebCam: ({ setMessage, setError, setOpenDialog, title, setResult, }: VidWebCamProps) => import("react/jsx-runtime").JSX.Element;
export default VidWebCam;
