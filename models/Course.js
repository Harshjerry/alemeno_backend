
const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
  week: Number,
  topic: String,
  content: String,
});

const courseSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  cat: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  enrollmentStatus: { type: String, enum: ['Open', 'Closed', 'In Progress'], required: true },
  duration: { type: String, required: true },
  schedule: { type: String, required: true },
  location: { type: String, required: true },
  prerequisites: [String],
  syllabus: [syllabusSchema],
  likes: { type: Number, default: 57 } // Add likes field with initial value 57
});



const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
