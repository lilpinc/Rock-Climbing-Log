const { Navigate, useNavigate } = require('react-router-dom');
const { Climbs, TrainingLog, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const {sendEmail} = require('../utils/sendemail');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');


const resolvers = {
    Query: {
        climbs: async () => {
            return await Climbs.find({});
        },
        climb: async (parent, { _id }) => {
            return await Climbs.findById(_id);
        },
        trainingLogs: async () => {
            return await TrainingLog.find({});
        },
        trainingLog: async (parent, { _id }) => {
            return await TrainingLog.findById(_id);
        },
        users: async () => {
            return await User.find({})
        },
        user: async (parent, {_id}) => {
            return await User.findById(_id);
        },
    },

    Mutation: {
        addClimb: async (parent, { climbName, grade, climbType, location, date, notes }) => {
            return Climbs.create({ climbName, grade, climbType, location, date, notes });
        },
        addTrainingLog: async (parent, { logName, date, notes }) => {
            return TrainingLog.create({ logName, date, notes });
        },
        addUser: async (parent, { username, email, password }) => {
            
            const user = await User.create({ username, email, password });
            
            const token = signToken(user);
           
            return { token, user };
          },
        updateClimb: async (parent, { _id, climbName, grade, climbType, location, date, notes }) => {
            return await Climbs.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        climbName,
                        grade,
                        climbType,
                        location,
                        date,
                        notes
                    }
                },
                { new: true }
            )
        },
        updateTrainingLog: async (parent, { _id, logName, date, notes }) => {
            return await TrainingLog.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        logName,
                        date,
                        notes
                    }
                },
                { new: true }
            )
        },
        updateUser: async (parent, { _id, username, password, email }) => {
            return await User.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        username,
                        password,
                        email
                    }
                },
                { new: true }
            )
        },
        removeClimb: async (parent, { _id }) => {
            return await Climbs.findByIdAndDelete(_id);
        },
        removeTrainingLog: async (parent, { _id }) => {
            return await TrainingLog.findByIdAndDelete(_id);
        },
        removeUser: async (parent, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        forgotPassword: async (parent, { email }) => {
            // Check for required environment variables
            if (!process.env.JWT_SECRET || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.FRONTEND_URL) {
                throw new Error('Server configuration error.');
            }
        
            const user = await User.findOne({ email });
        
            if (!user) {
                return {
                    success: false,
                    message: "No user found with that email address.",
                };
            }
        
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
            // Step 3: Send the reset link via email
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Use your email service
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });
        
            const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
        
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Password Reset',
                text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
            };
        
            try {
                await transporter.sendMail(mailOptions);
                return {
                    success: true,
                    message: 'Reset link sent to your email.',
                };
            } catch (error) {
                console.error('Error sending email:', error); // Log the error for debugging
                return {
                    success: false,
                    message: 'Error sending email, please try again later.',
                };
            }
        },
        resetPassword: async (_, { token, newPassword }) => {
            // Step 1: Verify the token
            let userId;
            try {
              const decoded = jwt.verify(token, process.env.JWT_SECRET);
              userId = decoded.id;
            } catch (error) {
              return {
                success: false,
                message: "Invalid or expired token.",
              };
            }
      
            // Step 2: Hash the new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);
      
            // Step 3: Update the user's password
            await User.findByIdAndUpdate(userId, { password: hashedPassword });
      
            return {
              success: true,
              message: "Password reset successfully.",
            };
          },
        },
        // resetPassword: async (parent, { _id, username, password, email }) => {
        //     return await User.findOneAndUpdate(
        //         _id,
        //         {
        //             $set:
        //             {
        //                 username,
        //                 password,
        //                 email
        //             }
        //         },
        //         { new: true }
        //     )
        // },

};

module.exports = resolvers;