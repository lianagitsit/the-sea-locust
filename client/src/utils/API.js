import axios from "axios";

export default {
    saveStudent: function(studentData) {
        return axios.post("/api/students", studentData);
    }
}