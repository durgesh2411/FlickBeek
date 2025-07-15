import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = "videotube";

console.log("Testing MongoDB connection...");
console.log("MongoDB URI:", MONGODB_URI);
console.log("Database Name:", DB_NAME);

async function testConnection() {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(`✅ MongoDB connected successfully!`);
    console.log(`DB HOST: ${connectionInstance.connection.host}`);
    console.log(`DB NAME: ${connectionInstance.connection.name}`);

    // Test basic operation
    console.log("Testing basic database operation...");
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(`Collections found: ${collections.length}`);

    mongoose.disconnect();
    console.log("✅ Connection test completed successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.error("Error details:", error);
    process.exit(1);
  }
}

testConnection();
