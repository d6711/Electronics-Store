const { Schema, Types, model } = require('mongoose')

const DOCUMENT_NAME = 'KeyToken'
const COLLECTION_NAME = 'KeyTokens'

const KeyTokenSchema = new Schema(
    {
        user: { type: Types.ObjectId, ref: 'User', required: true },
        refreshToken: { type: String },
        refreshTokenUsed: { type: Array, default: [] },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
)

KeyTokenSchema.index({ user: 1, refreshToken: 1 });

const KeyToken = model(DOCUMENT_NAME, KeyTokenSchema)
module.exports = KeyToken
