module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define("Student", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        onTLS: DataTypes.STRING,
        referralSource: DataTypes.STRING,
        school: DataTypes.STRING,
        firstExam: DataTypes.DATEONLY
    });
    return Student;
}