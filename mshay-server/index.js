import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'; // Ensure this import is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Main test route
app.get('/', (req, res) => {
  res.send('Hello from the modern Express server!');
});

// This line MUST be present to connect your product routes
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});