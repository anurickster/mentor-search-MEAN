const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  mentorName: {
    type: String,
    minLength: 3,
    required: true,
  },
  yearExperience: {
    type: Number,
    required: true,
  },
  monthExperience: {
    type: Number,
    required: true,
  },
  mentorSkills: {
    type: Array,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
    default: 'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png',
  },
});

const Mentor = mongoose.model('Mentor', MentorSchema);

module.exports = Mentor;
