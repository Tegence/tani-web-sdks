import React$1 from 'react';

declare class TaniAuth {
    private apiKey;
    private groupId;
    constructor(apiKey: string, groupId: string);
    getGroupId(): string;
    getHeaders(): Record<string, string>;
}

type EnrollUserUserResult = {
    message: string;
    person_details: {
        person_id: string;
        client_id: string | null;
        group_id: string;
        person_name: string;
        person_email: string | null;
    };
    image_details: {
        name: string;
        image_url: string;
        person_id: string;
    };
};
type FaceRecognitionResult = {
    message: string;
    similarity_score: number;
    potential_match: string;
};
type FaceComparisonResult = {
    message: string;
    similarity_score: number;
};
type LivenessCheckResult = {
    blink_detected: boolean;
    mouth_open_detected: boolean;
    head_movement_detected: boolean;
    is_live: boolean;
};
type TaniAuthTypes = {
    authInstance: TaniAuth;
    onSuccess: (apiResponse: EnrollUserUserResult | FaceRecognitionResult) => void;
};
type FaceCompareProps = {
    authInstance: TaniAuth;
    onSuccess: (apiResponse: FaceComparisonResult) => void;
    imageUrl: string;
};
type LivenessCheckProps = {
    onSuccess: (apiResponse: LivenessCheckResult) => void;
};

declare const EnrollUser: React$1.FC<TaniAuthTypes>;

declare const FaceRecognition: React$1.FC<TaniAuthTypes>;

declare const CompareFaces: React.FC<FaceCompareProps>;

declare const LivenessCheck: React.FC<LivenessCheckProps>;

export { CompareFaces, EnrollUser, FaceRecognition, LivenessCheck, TaniAuth };
