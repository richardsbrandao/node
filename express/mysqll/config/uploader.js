import multer from 'multer'
import multerS3 from 'multer-s3'
import configs from './config'
import { S3 } from './aws'

export default (fileField) => {
    return multer({
        storage: multerS3({
            s3: S3,
            bucket: configs.aws.s3.bucketName,
            key: function (request, file, cb) {
                    console.log('Upload file change log', file);
                    return cb(null, file.originalname); //use Date.now() for unique file keys
                }
            })
        }).single(fileField);
}