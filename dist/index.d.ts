import React$1 from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare class TaniAuth {
    private apiKey;
    private groupId;
    constructor(apiKey: string, groupId: string);
    getGroupId(): string;
    getHeaders(): Record<string, string>;
}

type FaceRecognitionResult = {
    message: string;
    potential_match: {
        person_id: string;
        person_name: string;
        client_id: string;
    };
    similarity_score: number;
};
type FaceComparisonResult = {
    message: string;
    similarity_score: number;
};
type TaniAuthTypes = {
    authInstance: TaniAuth;
    onSuccess: (apiResponse: string | FaceComparisonResult | FaceRecognitionResult) => void;
};
type FaceCompareProps = {
    authInstance: TaniAuth;
    onSuccess: (apiResponse: string | FaceComparisonResult | FaceRecognitionResult) => void;
    imageUrl: string;
};

declare const EnrollUser: React$1.FC<TaniAuthTypes>;

declare const FaceRecognition: React$1.FC<TaniAuthTypes>;

declare const CompareFaces: React.FC<FaceCompareProps>;

declare const LivenessCheck: () => react_jsx_runtime.JSX.Element;

export { CompareFaces, EnrollUser, FaceRecognition, LivenessCheck, TaniAuth };
