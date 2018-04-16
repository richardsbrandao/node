import {Enum} from 'enumify';

class CommentState extends Enum {}

CommentState.initEnum(['VIEW', 'EDIT', 'REMOVE'])

export default CommentState