import joi from "joi";

export default joi
  .object<{
    email: string;
    password: string;
    session_type: number;
  }>({
    email: joi.string().email().required().trim(),
    password: joi.string().required(),
  })
  .options({ stripUnknown: true });
