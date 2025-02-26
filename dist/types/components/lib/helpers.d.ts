export declare const convertBase64StringToFile: (base64String: string, filename: string) => File;
export declare const handleImageCompression: (file: File) => Promise<File | undefined>;
export declare const fetchAndProcessImage: (imageUrl: string, fileName: string) => Promise<File | null>;
