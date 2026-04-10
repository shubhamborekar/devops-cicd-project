const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevOps CI/CD Project</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f7fb;
        color: #1f2937;
      }
      .container {
        max-width: 900px;
        margin: 50px auto;
        background: white;
        padding: 35px;
        border-radius: 14px;
        box-shadow: 0 4px 18px rgba(0,0,0,0.08);
      }
      h1 {
        margin-top: 0;
        color: #111827;
      }
      .tag {
        display: inline-block;
        padding: 6px 12px;
        background: #2563eb;
        color: white;
        border-radius: 20px;
        font-size: 14px;
        margin-bottom: 20px;
      }
      .card {
        background: #f9fafb;
        border-left: 5px solid #2563eb;
        padding: 16px;
        margin: 18px 0;
        border-radius: 8px;
      }
      ul {
        padding-left: 22px;
      }
      li {
        margin: 8px 0;
      }
      .footer {
        margin-top: 24px;
        color: #6b7280;
        font-size: 14px;
      }
      .label {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="tag">Live on AWS EKS</div>
      <h1>🚀 DevOps CI/CD Project</h1>
      <p>Application is running successfully.</p>

      <div class="card">
        <p><span class="label">Hostname:</span> ${os.hostname()}</p>
        <p><span class="label">Environment:</span> ${process.env.NODE_ENV || 'development'}</p>
        <p><span class="label">Status:</span> Healthy</p>
      </div>

      <div class="card">
        <h3>Pipeline Flow</h3>
        <ul>
          <li>GitHub → Source Code</li>
          <li>Jenkins → CI/CD Automation</li>
          <li>Docker → Container Build</li>
          <li>AWS ECR → Image Storage</li>
          <li>AWS EKS → Kubernetes Deployment</li>
          <li>LoadBalancer → External Access</li>
        </ul>
      </div>

      <div class="card">
        <h3>Project Owner</h3>
        <p>Shubham Borukar</p>
        <p>CloudOps Engineer</p>
      </div>

      <div class="footer">
        Deployed through a real CI/CD pipeline on AWS.
      </div>
    </div>
  </body>
  </html>
  `);
});

// Health check for Kubernetes
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
