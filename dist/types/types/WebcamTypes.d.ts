import { LivenessCheckResult } from "./TaniAuthTypes";
export type WebCamProps = {
    setImageFile: (value: File | null) => void;
    imageSrc: string | null;
    setImageSrc: (value: string | null) => void;
    backgroundStyle?: string;
};
export type VidWebCamProps = {
    title?: string;
    setMessage: (value: string | null) => void;
    setError?: (value: string | null) => void;
    setOpenDialog: (value: boolean) => void;
    setResult: (value: LivenessDetection | null) => void;
    onSuccess: (apiResponse: LivenessCheckResult) => void;
};
export type LivenessDetection = {
    blink_detected: boolean;
    mouth_open_detected: boolean;
    head_movement_detected: boolean;
    is_live: boolean;
};
