import mongoose, { Document } from 'mongoose';


interface ContentInterface extends Document {
    title: String,
    link: String,
    tags: [String],
    userId: String
}


const ContentSchema = new mongoose.Schema<ContentInterface>({
    title: {type: String, required: true},
    link: {type: String, required: true},
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag', default: []}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', default: []}
})



export const ContentModel = mongoose.model('Content', ContentSchema);


