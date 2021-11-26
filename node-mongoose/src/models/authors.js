import Mongoose from 'mongoose'

const schemaAuthor = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: Date,
}, {
    timestamps: { createdAt: false, updatedAt: false },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})

const AuthorModel = Mongoose.model('Authors', schemaAuthor)

export default AuthorModel
