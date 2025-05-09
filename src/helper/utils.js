// upload image to cloudinary
const api_key = process.env.REACT_APP_API_KEY;
const cloudName = process.env.REACT_APP_CLOUD_NAME;
// upload images
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  formData.append("api_key", api_key );

  
   
  // console.log('Cloud Name:', cloudName);
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
console.log('Cloud url:', url);
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
