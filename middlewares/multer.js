const multer=require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp") //file path
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname) //use id over name
    }
  })
  
const upload = multer({ storage: storage })

  module.exports=upload;