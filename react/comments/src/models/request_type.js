import {Enum} from 'enumify';

class RequestType extends Enum {}

RequestType.initEnum(['PROCESSING', 'FAILED', 'SUCCESS'])

export default RequestType