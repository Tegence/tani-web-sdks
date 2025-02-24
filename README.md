
@tegence/tani-web-sdks

A React TypeScript SDK for face enrollment, facial recognition, face comparison, and liveness check.

📌 Installation

You can install the SDK using npm or yarn:

npm install @tegence/tani-web-sdks
# or
yarn add @tegence/tani-web-sdks

🚀 Usage

Initialize the SDK

Before using the components, create an instance of TaniAuth with your API key and group ID.

import { TaniAuth } from "@tegence/tani-web-sdks";

const taniAuth = new TaniAuth("your-api-key", "your-group-id");

🔹 Enroll a User (Face Enrollment)

import { EnrollUser } from "@tegence/tani-web-sdks";

<EnrollUser
  authInstance={taniAuth}
  onSuccess={(data) => console.log("Enrollment successful", data)}
/>

✅ Response Type: string (Unique identifier for the enrolled face).

🔹 Face Recognition (Identify a Face)

import { FaceRecognition } from "@tegence/tani-web-sdks";

<FaceRecognition
  authInstance={taniAuth}
  onSuccess={(result) => console.log("Face recognized:", result)}
/>

✅ Response Shape:

{
    "message": "We found a match for the uploaded image",
    "potential_match": {
        "person_id": "string",
        "person_name": "string",
        "client_id": "string"
    },
    "similarity_score": 0.7556397799150376
}

🔹 Face Comparison (Compare Two Faces)

import { FaceCompare } from "@tegence/tani-web-sdks";

<FaceCompare
  authInstance={taniAuth}  
  onSuccess={(data) => console.log("Faces match", data)}
/>

✅ Response Shape:

{
    "message": "The images you uploaded are the same person",
    "similarity_score": 0.7556397799150376
}

🔹 Liveness Check (Verify If the Face Is Real)

import { LivenessCheck } from "@tegence/tani-web-sdks";

<LivenessCheck />;

