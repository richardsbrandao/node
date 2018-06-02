import aws from 'aws-sdk'
import configs from "./config"

aws.config.update({
    secretAccessKey: configs.aws.secretAccessKey,
    accessKeyId: configs.aws.accessKeyId,
    region: configs.aws.region
});

module.exports.S3 = new aws.S3()