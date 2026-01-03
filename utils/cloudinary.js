const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SERCRET,
// });

// const uploadCloudinary = (fileBuffer) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { resource_type: "auto", folder: "doctors" },
//       (error, result) => {
//         if (error) {
//           console.log("Cloudinary Error:", error.message);
//           reject(error);
//         } else {
//           console.log("Upload Success:", result.secure_url);
//           resolve(result);
//         }
//       }
//     );
//     stream.end(fileBuffer);
//   });
// };

module.exports = { uploadCloudinary };
