// upload image to cloudinary
const api_key = process.env.REACT_APP_API_KEY;
// upload images
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  formData.append("api_key", api_key );

  const cloudName = process.env.REACT_APP_CLOUD_NAME;
   
  // console.log('Cloud Name:', cloudName);
  const url = `http://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Error uploading image: ${errorDetails}`);
  }

  const data = await response.json();
  return data.secure_url;
};