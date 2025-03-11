import mongoose, { Schema } from "mongoose";
import { roles } from "types/RolesTypes";

const RolesSchema: Schema = new Schema<roles>(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)




export const RolesModel = mongoose.model<roles>("Roles", RolesSchema)