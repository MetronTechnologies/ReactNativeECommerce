import User from "../models/user.js";

import Order from "../models/order.js";

import bcrypt from "bcrypt";

import crypto from "crypto";

import nodeMailer from "nodemailer";

import jwt from "jsonwebtoken";

async function sendVerificationMail(mail, verificationToken){
    try{
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jeremiahekanem2@gmail.com',
                pass: "bonq wupk iwpj mjii"
            }
        });
        const mailOptions = {
            from: 'amazon.com',
            to: mail,
            subject: "Email Verification",
            text: `Please click the link below to verify your email
http://192.168.43.230:8000/auth/verify/${verificationToken}`
        }
        await transporter.sendMail(mailOptions);
    } catch (e) {
        console.log("Error sending verification mail ", e);
    }
}

export async function signUp(request, response) {
    try{
        const {name, email, password, confirmPassword} = request.body;
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return response
                .status(400)
                .json({
                    message: "This user already exist in the system"
                })
        }
        if(password !== confirmPassword){
            return response.status(400).json(
                {
                    message: "Passwords doesn't match"
                }
            )
        }
        console.log("name ---> " + name);
        console.log("email ---> " + email);
        const hashedPass = await bcrypt.hash(password, 12);
        const newUser = new User(
            {
                ...User,
                name: name,
                email: email,
                password: hashedPass
            }
        );
        newUser.verificationToken = crypto.randomBytes(20).toString('hex');
        await User.create(newUser);
        await sendVerificationMail(newUser.email, newUser.verificationToken);
        response
            .status(200)
            .json({
                message: "Kindly check your mail for the verification code"
            })
    } catch (e) {
        console.log("Error signing in ", e)
        response
            .status(500)
            .json({
                message: "You could not sign in"
            })
    }
}


const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
}



export async function signIn(request, response) {
    const { email, password } = request.body;
    console.log("email ---> ", email);
    console.log("password ---> ", password);
    try {
        const existingUser = await User.findOne({email: email});
        if (!existingUser || !existingUser.verified) {
            return response.status(401).json(
                {
                    message: !existingUser ? "User doesn't exist" : "Your account has not been verified"
                }
            )
        }
        const passVerify = await bcrypt.compare(password, existingUser.password);
        if (!passVerify) {
            return response.status(400).json(
                {
                    message: "Invalid credentials"
                }
            )
        }
        // const token = jwt.sign(
        //     {
        //         email: existingUser.email,
        //         id: existingUser._id
        //     },
        //     generateSecretKey(),
        //     {
        //         expiresIn: "1h"
        //     }
        // );
        const token = jwt.sign(
            {
                email: existingUser.email,
                id: existingUser._id
            },
            'test',
            {
                expiresIn: "1h"
            }
        );
        response.status(200).json({token})
    } catch (e) {
        console.log("Error signing up ", e)
        response
            .status(500)
            .json({
                message: "You could not sign up"
            })
    }
}


export async function test(request, response) {
    try {

        response.status(200).json(
            {
                userToken: "trimming"
            }
        )
    } catch (e) {
        console.log("Error signing up ", e)
        response
            .status(500)
            .json({
                message: "You could not sign up"
            })
    }
}

export async function verifyToken(request, response) {
    try{
        const token = request.params.token;
        const user =  await User.findOne({verificationToken: token}).exec();
        if(!user){
            response
                .status(404)
                .json({
                    message: "Invalid verification token"
                })
        }
        await User
            .findOneAndUpdate(
                {
                    email: user.email
                },
                {
                    verificationToken: "",
                    verified: true
                },
                {
                    upsert: false
                }
            )
            .exec();
        response
            .status(200)
            .json({
                message: "Email verified successfully"
            })
    } catch (e) {
        console.log("Error verifying token ", e)
        response
            .status(500)
            .json({
                message: "Your token could not be verified at the moment"
            })
    }
}


