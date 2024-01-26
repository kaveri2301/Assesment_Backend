
const employeeModel = require('../Model/EmployeeModel')
const bcrypt = require('bcryptjs')

// async function addEmployee(req, res) {
//     try {
//         const data = new employeeModel({
//             empname: req.body.empname,
//             empid: req.body.empid,
//             email: req.body.email,
//             password: req.body.password,
//             age: req.body.age,
//             gender: req.body.gender,
//             skills:req.body.skills.split(',').map(skill => skill.trim()),
//             // skills: req.body.skills,
//             // skills: skills.split(',').map(skill => skill.trim()),
//             city: req.body.city,
//             joiningdate: req.body.joiningdate,
//             marritalstatus: req.body.marritalstatus
//         })
//         // console.log(req.body);
//         const employeeData = await data.save()
//         res.status(201).send({ msg: "Employee added successfully", employeeData })
//     }
//     catch (err) {
//         res.status(400).send({ err })
//     }
// }

async function addEmployee(req, res) {

    try {
        const { empname, empid, email, age, gender, password, skills, city, joiningdate, marritalstatus } = req.body

        const skillsArray = skills.split(',').map(skill => skill.trim());

        //Array.isArray(skillsArray) ? skillsArray : [skillsArray]

        const salt = bcrypt.genSaltSync(12)
        const encpassword = bcrypt.hashSync(password, salt)

        const data = new employeeModel({
            empname,
            empid,
            email,
            password: encpassword,
            age,
            gender,
            skills: skillsArray,
            city,
            joiningdate,
            marritalstatus,
            image: req.file.filename
            // image:req.files.image
        });

        const employeeData = await data.save();
        res.status(201).send({ msg: "Employee added successfully", employeeData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

// async function updateEmployee(req, res) {
//     try {
//         const { email } = req.params

//         const { empname, empid, age, gender, skills, city, joiningdate, marritalstatus } = req.body

//         console.log(req.body);

//         const skillsArray = skills.split(',').map(skill => skill.trim());
//         // const skillsArray = req.body.skills ? req.body.skills.split(',').map(skill => skill.trim()) : [];
//         // const skillsArray = skills ? skills.split(',').map(skill => skill.trim()) : undefined;

//         const data = await employeeModel.updateOne(
//             { email },
//             {
//                 $set:
//                 {
//                     empname,
//                     empid,
//                     age,
//                     gender,
//                     skills: skillsArray,
//                     city,
//                     joiningdate,
//                     marritalstatus,
//                     image: req.file.filename
//                 }
//             }
//         )
//         if (data.modifiedCount > 0) {
//             res.status(200).send({ msg: "Data has been updated" });
//         } else {
//             res.status(400).send({ msg: "You haven't updated anything" });
//         }

//         console.log("Request Body:", req.body);
//         console.log("Skills Array:", skillsArray);
//         console.log("Update Data:", data);


//     } catch (error) {
//         res.status(500).send({ error })
//     }
// }

async function updateEmployee(req, res) {
    try {
        const { email } = req.params;
        const { empname, empid, age, gender, skills, city, joiningdate, marritalstatus } = req.body;

        const skillsArray = skills ? skills.split(',').map(skill => skill.trim()) : [];

        console.log("Request Body:", req.body);
        console.log("Skills Array:", skillsArray);

        const data = await employeeModel.updateOne(
            { email },
            {
                $set: {
                    empname,
                    empid,
                    age,
                    gender,
                    skills: skillsArray,
                    city,
                    joiningdate,
                    marritalstatus,
                    image: req.file ? req.file.filename : undefined
                }
            }
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" });
        } else {
            res.status(400).send({ msg: "You haven't updated anything" });
        }

        console.log("Update Data:", data);
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).send({ error: "Internal server error. Please check the server logs for more details." });
    }
}




async function findEmployees(req, res) {
    try {
        const empData = await employeeModel.find()
        res.status(200).send({ empData })

    }
    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularEmployee(req, res) {
    try {
        const empData = await employeeModel.findOne({ email: req.params.email })
        if (empData != null) {
            res.status(200).send({ empData })
        }
        else {
            res.status(400).send({ message: "This employee doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteEmployee(req, res) {
    try {
        const data = await employeeModel.deleteOne({ email: req.params.email })
        res.status(200).send({ msg: "Employee deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addEmployee, updateEmployee, findEmployees, findParticularEmployee, deleteEmployee }