export type WebCamProps = {
  setImageFile: (value: File | null) => void;
  imageSrc: string | null;
  setImageSrc: (value: string | null) => void;
  backgroundStyle?: string;
};