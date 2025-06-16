import './config/config.default.js';
import app from './app/index.js';

const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
