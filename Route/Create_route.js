const {addperson,findPerson ,login,updateUser}= require ('../Controller/Create_controller')
const express = require('express')
const router = express()



router.post('/add', addperson)
router.get('/findall', findPerson)
// router.post('/login', login)
router.put('/update/:email', updateUser)


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user with the provided email exists
        const user = await personModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ msg: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid email or password' });
        }

        // At this point, authentication is successful
        res.status(200).json({ msg: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});







module.exports = router