
// // passwordController.js
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const UserModel = require('../Model/Recovery_model');


// async function addperson(req, res) {
//   try {
//     const{email,password}=req.body
//         const salt = bcrypt.genSaltSync(12)

//         const encpassword = bcrypt.hashSync(password, salt)
        
//         const data = new UserModel({
           
//             email,
//             password:encpassword,
         

//       })
//       const personData = await data.save()
//       res.status(201).send({ msg: "Vendor added successfully", personData })
//   } catch (err) {
//       res.status(400).send({ err })
//   }
// }

// const forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Check if the user with the provided email exists
//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Generate a reset token and set its expiry time
//     const resetToken = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
//     user.resetToken = resetToken;
//     user.resetTokenExpiry = new Date() + 3600000; // 1 hour from now
//     await user.save();

//     // Send reset email with the token
//     sendResetEmail(user.email, resetToken);

//     res.json({ message: 'Password reset email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     // Decode and verify the reset token
//     const decodedToken = jwt.verify(token, 'your_secret_key');

//     // Find the user with the decoded user ID and token
//     const user = await UserModel.findOne({ _id: decodedToken.userId, resetToken: token });

//     if (!user || user.resetTokenExpiry < new Date()) {
//       return res.status(400).json({ message: 'Invalid or expired token' });
//     }

//     // Update the user's password and reset token fields
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     user.resetToken = null;
//     user.resetTokenExpiry = null;
//     await user.save();

//     res.json({ message: 'Password reset successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const sendResetEmail = (email, token) => {
//   // Implement Nodemailer logic to send reset email with the provided token
// };



// module.exports = { addperson,forgotPassword,resetPassword};
