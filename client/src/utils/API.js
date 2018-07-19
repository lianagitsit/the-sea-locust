import axios from "axios";

export default {
    saveStudent: function(studentData) {
        return axios.post("/api/students", studentData);
    },
    getStudents: function() {
        return axios.get("/api/all");
    },
    sendEmail: function(email) {
        return axios.post("/api/email", email);
    },
    deleteStudent: function(id) {
        return axios.delete("/api/students/" + id);
    }
}