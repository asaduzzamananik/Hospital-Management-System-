
const Query =
{
    createUser: function (id, name, password, email, age, gender, address, type) {
        return `INSERT INTO user(id, name, password, email, age, gender, address, type) VALUES ('${id}', '${name}', '${password}',  '${email}' , '${age}', '${gender}' , '${address}', '${type}');`
    },
    addAppointment: function (id, patient_id, name, room, date, time) {
        return `INSERT INTO appointment(id, patient_id, name, room, date, time) VALUES ('${id}', '${patient_id}', '${name}',  '${room}' , '${date}', '${time}');`
    },
    addPrescription: function (id, patient_id, medicine, date, doctor) {
        return `INSERT INTO prescription(id, patient_id, medicine, date, doctor) VALUES ('${id}', '${patient_id}', '${medicine}',  '${date}' , '${doctor}');`
    },
    getUsers: function () {
        return `SELECT * FROM user;`;
    },
    getAppointments: function () {
        return `SELECT * FROM appointment;`;
    },
    delteAppointment: function (id) {
        return `DELETE FROM appointment WHERE id='${id}';`;
    },
    getPrescriptions: function () {
        return `SELECT * FROM prescription;`;
    },
    verifyUser: function (name, password) {
        return `SELECT * FROM user WHERE name='${name}' AND password='${password}';`;
    },
    getDoctors: function () {
        return `SELECT * FROM user WHERE type='doctor';`;
    },
    removeDoctor: function (id) {
        return `DELETE FROM user WHERE type='doctor' AND id='${id}';`;
    },
    getPatients: function () {
        return `SELECT * FROM user WHERE type='patient';`;
    },

 

}
export default Query; 