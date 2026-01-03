const multer = require("multer");

const storage = multer.memoryStorage(); // Memory Storage to Buffer
const upload = multer({ storage: storage });

module.exports = upload;
