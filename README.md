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

```json
{
  "message": "Person created successfully",
  "person_details": {
      "person_id": "ca18a8c6-00eb-4b8d-string",
      "client_id": "string",
      "group_id": "d2ea1214-22fd-4512-9844-string",
      "person_name": "john doe",
      "person_email": "johndoe@email.com",
  },
  "image_details": {
    "name": "john doe",
    "image_url": "image url",
    "person_id": "string",
  }
}
```

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
  "similarity_score": 88.99883838838,
  "potential_match": "John Doe",
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

<LivenessCheck 
  onSuccess={(data) => console.log("liveness checked", data)}
/>;
```
✅ **Response Shape:**  

```json
{
  "blink_detected": false,
  "mouth_open_detected": false,
  "head_movement_detected": false,
  "is_live": false
}
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





