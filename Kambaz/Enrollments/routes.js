import * as enrollmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });
    app.delete("/api/enrollments/unenroll/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
    });
    app.post("/api/enrollments/enroll/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
}