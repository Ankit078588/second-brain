import mongoose, { CallbackError, Document } from "mongoose";
import bcrypt from "bcrypt";



interface UserInterface extends Document {
    name: string,
    email: string,
    password: string,
    comparePassword: (candidatePassword: string) => boolean;
}


// userSchema
const userSchema = new mongoose.Schema<UserInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})



// hash password before saving
userSchema.pre('save', async function(next) {
    try {
        const user = this;
        if(!user.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch(e) {
        next(e as CallbackError)
    }
})



// Compare Password
userSchema.methods.comparePassword = async function (candidatePassword: string) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch;
}






// UserModel
export const UserModel = mongoose.model<UserInterface>('User', userSchema);


