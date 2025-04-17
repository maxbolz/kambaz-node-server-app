import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    type: { type: String, enum: ['true_false', 'multiple_choice', 'fill_in_the_blank'], required: true },
    question: { type: String, required: true },
    answers: { type: [String], required: true },
    correct_answer: { type: String, required: true },
    points: { type: Number, required: true }
},
    { collection: "questions" }
);

const quizSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    course: { type: String, ref: "CourseModel" },
    quizType: { type: String, required: true },
    points: { type: Number, required: true },
    assignmentGroup: { type: String },
    shuffleAnswers: { type: Boolean, default: false },
    timeLimit: { type: Number },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: { type: String, enum: ['Always', 'Never', 'Manually'] },
    accessCode: { type: String, default: '' },
    oneAtATime: { type: Boolean, default: false },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    due: { type: Date },
    available: { type: Date },
    until: { type: Date },
    questions: { type: [questionSchema], required: true }
},
    { collection: "quizzes" }
);
export default quizSchema;