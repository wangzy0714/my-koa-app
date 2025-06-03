import './config/config.default.js';
import app from './app/index.js';

const port = process.env.APP_PORT;
app.listen(3000, () => {
  console.log(`🚀 ~ Server is running on http://localhost:${port}`);
});
