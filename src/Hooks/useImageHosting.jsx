import axios from 'axios';

const useImageHosting = async (file) => {
    // Fetch the API key from the environment variables
    const apiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;    
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    
    // Prepare form data with the image file
    const formData = new FormData();
    formData.append('image', file);
    
    try {
        // Post the image to the hosting API
        const res = await axios.post(imageHostingApi, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: false,
        });

        // Check if the upload was successful
        if (res.data.success) {
            const imageUrl = res.data.data.url;
            console.log('Image URL:', imageUrl);
            return {image: imageUrl};
        } else {
            console.error('Error uploading image:', res.data.error.message);
        }
    } catch (error) {
        console.error('Error uploading image:', error.message);
    }
};

export default useImageHosting;