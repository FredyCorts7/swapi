const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/images/")
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 3000000 //medido en bytes
  },
  fileFilter: function(req, file, cb) {
    const fileTypes = /jpeg|jpg|png/
    const mimetype = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))
    if (mimetype && extname) return cb(null, true)
    cb("El archivo debe tener una extensión de imagen válida")
  }
})

module.exports = upload
