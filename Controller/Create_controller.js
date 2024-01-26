const personModel = require('../Model/Create_model')
const bcrypt = require('bcryptjs')


async function addperson(req, res) {
    try {
        const{firstName,lastName,email,password,confirmPassword}=req.body
        const salt = bcrypt.genSaltSync(12)

        const encpassword = bcrypt.hashSync(password, salt)
        const encconfirmPassword = bcrypt.hashSync( confirmPassword, salt)
        
        const data = new personModel({
            firstName,
            lastName,
            email,
            password:encpassword,
            // confirmPassword
            confirmPassword:encconfirmPassword
            

        })
        const createData = await data.save()
        res.status(201).send({ msg: "person added successfully", createData })
    } catch (err) {
        res.status(400).send({ err })
    }
}

const findPerson = async (req, res) => {
    try {
        const personData = await personModel.find()
        res.status(200).send({ personData })
    } catch (err) {
        res.status(500).send(err)
    }
}
async function login(req, res) {
    try {

        const { email, password } = req.body

        const data = await personModel.findOne({ email })

        const compare = await bcrypt.compare(password, data.password)

        if (compare === true) {
            res.status(200).send({ data })
        }else{
            res.status(400).send({ msg: "Email or password incorrect" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateUser(req,res){
    try{
        const{email}=req.params
        const{firstName,lastName}=req.body

        const data=await personModel.updateOne(
            {email},{$set:{firstName,lastName}}
        )
        if(data.modifiedCount>0){
            res.status(200).send({msg:"User updated successfully"})
        }else{
            res.status(400).send({msg:"You haven't updated any data"})
        }
    } catch(error){
        res.status(500).send(err)
    }
}




module.exports = {addperson,findPerson,login,updateUser}


