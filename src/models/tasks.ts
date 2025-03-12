import mongoose, { Schema } from "mongoose";
import { task } from "types/taskTypes";
import bcrypt from 'bcrypt'

const taskSchema: Schema = new Schema<task>(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"]
        },
        username:{
            type:String,
            required: [true, "necesitamos tu nombre"],
            minlength: [10,"tu usuario es demasiado corto!"]
        },
        description: {
            type: String,
            required: [true, "La descripción es obligatoria"],
            minlength: [10, "La descripción debe tener al menos 10 caracteres"],
        },
        expirationDate: {
            type: Date,
            required: [true, "La fecha de expiración es obligatoria y debe ir en formato AAAA-MM-DD en comillas"],
        },
        state: {
            type: Number,
            required: [true, "El estado es obligatorio"],
            enum: {
                values: [0, 1],
                message: "El estado debe ser 0 (inactivo) o 1 (activo)"
            },
            default: 1 
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        password:{ 
            type: String,
            required:true,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

taskSchema.pre<task>('save', async function(next){
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
    }
    next();
})

taskSchema.method("comparePassword", async function(password: string): Promise<boolean>{
    return await bcrypt.compare(password, this.password as string)
})


taskSchema.methods.toJSON = function (){
    const userOBJ = this.toObject()
    delete userOBJ.password
    return userOBJ;
}
export const taskModel = mongoose.model<task>("task", taskSchema)