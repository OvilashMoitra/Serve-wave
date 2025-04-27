// "use client"
// import React, { useState } from 'react';
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import axios from 'axios';

// const ImageUploader = () => {
//     const [loading, setLoading] = useState(false);
//     const [imageUrl, setImageUrl] = useState('');

//     const getBase64 = (img, callback) => {
//         const reader = new FileReader();
//         reader.addEventListener('load', () => callback(reader.result));
//         reader.readAsDataURL(img);
//     };

//     const beforeUpload = (file) => {
//         const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//         if (!isJpgOrPng) {
//             message.error('You can only upload JPG/PNG file!');
//         }
//         return isJpgOrPng;
//     };

//     const handleChange = async (info) => {
//         if (info.file.status === 'uploading') {
//             setLoading(true);
//             return;
//         }
//         if (info.file.status === 'done') {
//             setLoading(false);
//             console.log('handle change function');
//             const imgUrl = await uploadToImageBB(info.file.originFileObj);
//             setImageUrl(imgUrl);
//         }
//     };

//     const uploadToImageBB = async (file) => {
//         try {
//             const formData = new FormData();
//             formData.append('image', file);

//             const apiKey = '0a9bb1b73b0a5f9dc610939d8107c4fc'; // Replace with your ImageBB API key
//             const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 return data.data.url;
//             } else {
//                 throw new Error('Image upload failed');
//             }
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     };

//     const uploadButton = (
//         <div>
//             {loading ? <LoadingOutlined /> : <PlusOutlined />}
//             <div style={{ marginTop: 8 }}>Upload</div>
//         </div>
//     );

//     return (
//         <Upload
//             name="avatar"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}

//             beforeUpload={beforeUpload}
//             onChange={handleChange}
//         >
//             {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//         </Upload>
//     );
// };

// export default ImageUploader;
