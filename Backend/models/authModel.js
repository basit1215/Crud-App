import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    isVerified:{
        type:Boolean,
        default: false
    }

    // },
    // resetPasswordToken:  {
    //     type: String,
    // },
	// resetPasswordExpiresAt: {
    //     type: Date,
    //     default:Date.now * 1 * 60 * 60 * 1000
    // },

})


export const User = mongoose.model("user", UserSchema);