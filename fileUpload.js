const multer = require('multer')
const path = require('path')

// console.log(__dirname)
// console.log(__filename);
// console.log(path.join(__dirname,'./public/images'));

const photoStorage = multer.diskStorage({
    
    destination : (req,file,cb) =>{
        cb(null,path.join(__dirname,'./public/images'))
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    }
})




const photoUpload = multer({
    storage:photoStorage,
    // limits:{fileSize: 5*1024*1024 }
})




module.exports = photoUpload