const { Success } = require("../core/success.response")
const { uploadImageFromLocal, uploadImageFromUrl, uploadMultipleFilesFromLocal } = require("../services/upload.service")

class UploadController {
    async uploadFromUrl(req, res) {
        new Success({
            message: 'Upload file success',
            metadata: await uploadImageFromUrl()
        }).send(res)
    }
    async uploadFileFromLocal(req, res) {
        const { file } = req
        new Success({
            message: 'Upload file success',
            metadata: await uploadImageFromLocal(file.path)
        }).send(res)
    }
    async uploadMultipleFiles(req, res) {
        const { files } = req
        new Success({
            message: 'Upload files success',
            metadata: await uploadMultipleFilesFromLocal(files)
        }).send(res)
    }
}

module.exports = new UploadController()