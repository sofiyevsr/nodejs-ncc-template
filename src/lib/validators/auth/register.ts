import joi from "joi";

export default joi
  .object<{
    first_name: string;
    last_name: string;
    password: string;
    session_type: number;
    email: string;
  }>({
    first_name: joi.string().min(2).max(30).required().trim(),
    last_name: joi.string().min(2).max(30).required().trim(),
    email: joi.string().email().required().trim(),
    password: joi.string().required(),
  })
  .options({ stripUnknown: true });
