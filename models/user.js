const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  url_image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  social_profile: {
    type: Array,
    required: true,
  },
  promote: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  last_login: {
    type: String,
    required: true,
  },
});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object
})

module.exports = model('User', UserSchema);

