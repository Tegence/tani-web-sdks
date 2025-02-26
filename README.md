# @tegence/tani-web-sdks

A **React TypeScript SDK** for **face enrollment, facial recognition, face comparison, and liveness check**.

## 📌 Installation

Install the SDK using **npm** or **yarn**:

```sh
npm install @tegence/tani-web-sdks
# or
yarn add @tegence/tani-web-sdks
```

## 🚀 Usage

### 1️⃣ Initialize the SDK

Before using the components, create an instance of `TaniAuth` with your **API key** and **Group ID**.

```tsx
import { TaniAuth } from "@tegence/tani-web-sdks";

const taniAuth = new TaniAuth("your-api-key", "your-group-id");
```

---

### 2️⃣ Enroll a User (Face Enrollment)

```tsx
import { EnrollUser } from "@tegence/tani-web-sdks";

<EnrollUser
  authInstance={taniAuth}
  onSuccess={(data) => console.log("Enrollment successful", data)}
/>;
```

✅ **Response:**  
A unique identifier (`string`) for the enrolled face.

---

### 3️⃣ Face Recognition (Identify a Face)

```tsx
import { FaceRecognition } from "@tegence/tani-web-sdks";

<FaceRecognition
  authInstance={taniAuth}
  onSuccess={(result) => console.log("Face recognized:", result)}
/>;
```

✅ **Response Shape:**  

```json
{
  "message": "We found a match for the uploaded image",
  "potential_match": {
    "person_id": "string",
    "person_name": "string",
    "client_id": "string"
  },
  "similarity_score": 0.7556397799150376
}
```

---

### 4️⃣ Face Comparison (Compare Two Faces)

```tsx
import { CompareFaces } from "@tegence/tani-web-sdks";

<CompareFaces
  authInstance={taniAuth}
  imageUrl="https://image.com"
  onSuccess={(data) => console.log("Faces match", data)}
/>;
```

✅ **Response Shape:**  

```json
{
  "message": "The images you uploaded are the same person",
  "similarity_score": 0.7556397799150376
}
```

---

### 5️⃣ Liveness Check (Verify If the Face Is Real)

```tsx
import { LivenessCheck } from "@tegence/tani-web-sdks";

<LivenessCheck />;
```

---

### 🎨 Styling

To apply styles, import the SDK's CSS file in your project:

```tsx
import "@tegence/tani-web-sdks/dist/styles.css";
```

---

## 📖 Additional Notes
- Ensure you have a valid **API key** and **Group ID** for authentication.
- The SDK is designed to be **React-compatible** and **framework-agnostic**.
- Components provide a **callback function (`onSuccess`)** to handle responses.

---

### 📄 License
This project is licensed under the **MIT License**.





