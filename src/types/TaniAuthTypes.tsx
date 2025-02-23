import { TaniAuth } from "../components/controllers/TaniAuth";

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
export type TaniAuthTypes = {
    authInstance: TaniAuth;
    onSuccess: (apiResponse: string | FaceComparisonResult | FaceRecognitionResult) => void;
};