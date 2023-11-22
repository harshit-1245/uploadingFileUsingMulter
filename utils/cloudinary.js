const cloudinary = require('cloudinary').v2; // Import v2 of Cloudinary directly

const fs=require('fs')
require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY 
});

const uploadOnCloud=async(localFilePath)=>{
try {
    if(!localFilePath){
        return null;
    }
    //uploading file
   const result=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log("File has uploaded",result.url)
    return result;
} catch (error) {
    fs.unlinkSync(localFilePath); //remove the local file when upload got failed
    return null;
}
}

module.exports={uploadOnCloud};

