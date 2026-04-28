import * as yup from "yup"
export const passwordSchema=yup.string()
            .required("password is required")
            .min(5,"Min 5 character password")