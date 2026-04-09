const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 DevOps CI/CD Project</h1>
    <p>Application is running successfully</p>
    <p><b>Hostname:</b> ${os.hostname()}</p>
    <p><b>Environment:</b> ${process.env.NODE_ENV || 'development'}</p>
  `);
});

// Health check (VERY IMPORTANT for Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    hostname: os.hostname(),
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
