// Simple test to verify API endpoints
import fetch from "node-fetch";

async function testEndpoints() {
  const baseURL = "http://localhost:9000";

  console.log("Testing API endpoints...\n");

  // Test healthcheck endpoint
  try {
    console.log("1. Testing healthcheck endpoint:");
    const response = await fetch(`${baseURL}/api/v1/healthcheck`);
    console.log(`   Status: ${response.status}`);
    console.log(`   URL: ${baseURL}/api/v1/healthcheck`);
    const data = await response.text();
    console.log(`   Response: ${data}\n`);
  } catch (error) {
    console.log(`   Error: ${error.message}\n`);
  }

  // Test users endpoint (should show available methods)
  try {
    console.log("2. Testing users endpoint:");
    const response = await fetch(`${baseURL}/api/v1/users`);
    console.log(`   Status: ${response.status}`);
    console.log(`   URL: ${baseURL}/api/v1/users`);
    const data = await response.text();
    console.log(`   Response: ${data}\n`);
  } catch (error) {
    console.log(`   Error: ${error.message}\n`);
  }

  console.log("✅ Correct URLs for your frontend:");
  console.log(`   Register: POST ${baseURL}/api/v1/users/register`);
  console.log(`   Login:    POST ${baseURL}/api/v1/users/login`);
  console.log(`   Logout:   POST ${baseURL}/api/v1/users/logout`);
}

testEndpoints();
