import dotenv from "dotenv";

dotenv.config();

import app from "src/config/app";

const PORT = process.env.PORT || 4500;

app.listen(PORT as number, () => {
  console.log(`App started on ${PORT}`);
});
