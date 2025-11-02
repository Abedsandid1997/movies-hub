import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return noImage;
  return `${import.meta.env.VITE_IMAGE_URL}${imageUrl}`;
};
