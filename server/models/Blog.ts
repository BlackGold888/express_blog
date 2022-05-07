import mongoose  from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },

}, {
    timestamps: true,
});

export const Blog = mongoose.model('Blog', BlogSchema);
