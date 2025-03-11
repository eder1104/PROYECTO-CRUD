import mongoose, { Schema } from "mongoose";
import { task } from "types/taskTypes";

const taskSchema: Schema = new Schema<task>(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"]
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
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)




export const taskModel = mongoose.model<task>("task", taskSchema)