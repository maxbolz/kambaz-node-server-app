import * as quizzesDao from "./dao.js";

export default function QuizRoutes(app) {
    app.post("/api/quizzes", async (req, res) => {
        const quiz = await quizzesDao.createQuiz(req.body);
        res.json(quiz);
    });
    app.get("/api/quizzes", async (req, res) => {
        const quizzes = await quizzesDao.findAllQuizzes();
        res.send(quizzes);
    });
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });
}