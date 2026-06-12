# 🧠 Probono Mental Health Finder Ghana
 
![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![CloudFront](https://img.shields.io/badge/CloudFront-CDN-blue)
![EC2](https://img.shields.io/badge/EC2-WebServer-green)
![ALB](https://img.shields.io/badge/Application_Load_Balancer-Enabled-yellow)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-purple)
![Status](https://img.shields.io/badge/Deployment-Live-success)
 
---
 
## 🌍 Project Overview
 
Probono Mental Health Finder Ghana is a web application designed to help users discover mental health resources, services, and support options.
 
This project was developed as part of the **AWS End-to-End Cloud Solution Design & Deployment Capstone Project**, where the goal was to design, secure, deploy, monitor, and automate a production-style cloud application using AWS Free Tier services.
 
 
---
 
 
 
## 🎯 Project Objectives
 
The project focused on:
 
✅ Building a real-world web application
 
✅ Deploying infrastructure on AWS
 
✅ Implementing security best practices
 
✅ Configuring a Content Delivery Network (CDN)
 
✅ Automating deployments using CI/CD
 
✅ Monitoring application health
 
✅ Managing cloud costs
 
---
 
# 🏗️ Cloud Architecture
 
 
```text
 
                    ┌────────────────────┐
 
                    │       Users        │
 
                    └──────────┬─────────┘
 
                               │ HTTPS
 
                               ▼
 
                    ┌────────────────────┐
 
                    │    CloudFront CDN  │
 
                    └──────────┬─────────┘
 
                               │ HTTPS
 
                               ▼
 
                    ┌────────────────────┐
 
                    │ Application Load   │
 
                    │     Balancer       │
 
                    └──────────┬─────────┘
 
                               │
 
                               ▼
 
                    ┌────────────────────┐
 
                    │    EC2 Instance    │
 
                    │ Apache Web Server  │
 
                    └────────────────────┘
 
 
 
 
 
Static Assets
     │
     ▼
    S3
 
 
 
Monitoring
     │
     ▼
CloudWatch
 
 
 
CI/CD
     │
     ▼
GitHub Repository
     │
     ▼
GitHub Actions  CI/CD
     │
     ▼
SSH Deployment to EC2
```
 
 
---
 
# Live Application
 
 
 
**Production URL**
 
 
 
https://www.mhfindergh.xyz
 
 
 
---
 
 
 
---
 
# ☁️ AWS Services Used
 
| Service        | Purpose                          |
| -------------- | -------------------------------- |
| EC2            | Hosts the application            |
| ALB            | Load balances incoming traffic   |
| CloudFront     | Global CDN and HTTPS entry point |
| ACM            | SSL/TLS certificate management   |
| S3             | Static asset storage             |
| IAM            | Access control                   |
| CloudWatch     | Monitoring and logging           |
| Budgets        | Cost monitoring                  |
| GitHub Actions | CI/CD automation                 |
 
---
 
# 🚀 Phase 1 — Project Setup & Environment Configuration
 
### Completed Tasks
 
* Created AWS Free Tier environment
* Configured IAM users following least privilege
* Installed and configured AWS CLI
* Created GitHub repository
* Configured Git branching strategy
* Created project management board
* Launched Amazon EC2 instance
* Configured Security Groups
* Created S3 bucket
* Requested ACM SSL certificate
* Connected custom domain
 
### Skills Learned
 
* AWS account management
* IAM security principles
* Domain and certificate management
* Cloud networking fundamentals
 
---
 
# 💻 Phase 2 — Application Deployment
 
### Completed Tasks
 
✅ Built and deployed Mental Health Finder
 
✅ Hosted application on EC2
 
✅ Installed Apache HTTP Server
 
✅ Configured Target Group
 
✅ Configured Application Load Balancer
 
✅ Implemented HTTP → HTTPS redirect
 
✅ Verified ALB health checks
 
✅ Uploaded source code to GitHub
 
### Application Features
 
* Responsive UI
* Mental health resource discovery
* Secure HTTPS access
* Public cloud deployment
 
---
 
# 🔐 Phase 3 — Security Hardening & CloudFront Integration
 
### Security Implementations
 
### CloudFront CDN
 
Configured CloudFront distribution with:
 
* ALB as origin
* HTTPS enforcement
* Caching configuration
* Custom domain support
 
---
 
### SSL/TLS Encryption
 
Implemented:
 
* ACM Certificate
* HTTPS on ALB
* HTTPS on custom domain
 
---
 
### IAM Hardening
 
Applied least-privilege permissions for:
 
* IAM users
* Deployment operations
* Administrative access
 
---
 
### Security Groups Review
 
Reviewed and documented:
 
| Port | Purpose            |
| ---- | ------------------ |
| 22   | SSH Administration |
| 80   | HTTP Redirect      |
| 443  | HTTPS Traffic      |
 
---
 
### CloudFront Restrictions
 
Configured:
 
* CloudFront behavior policies
* HTTP → HTTPS redirection
* Static asset caching
 
---
 
# ⚙️ Phase 4 — CI/CD, Monitoring & Cost Management
 
## 🚀 Continuous Deployment Pipeline
 
Implemented GitHub Actions workflow.
 
### Deployment Process
 
```text
Developer Pushes Code
        │
        ▼
GitHub Repository
        │
        ▼
GitHub Actions
        │
        ▼
SSH Into EC2
        │
        ▼
git pull origin main
        │
        ▼
Restart Apache
```
 
### Automated Deployment Features
 
✅ Auto deployment on push
 
✅ Remote EC2 updates
 
✅ GitHub Actions workflows
 
✅ Infrastructure automation
 
---
 
## 📊 Monitoring
 
### CloudWatch Alarms
 
Configured alarms for:
 
### EC2 CPU Utilization
 
* Alarm Threshold: 80%
 
### ALB 5XX Errors
 
* Alarm Threshold: >5 errors
 
---
 
## 📜 CloudWatch Logs
 
Configured:
 
* Web application logs
* Apache logs
* 7-day retention policy
 
---
 
## 💰 Cost Management
 
### AWS Budgets
 
Configured budget notifications to:
 
* Track spending
* Prevent unexpected charges
* Stay within Free Tier limits
 
---
 
# 🛡️ Security Checklist
 
| Security Control         | Status |
| ------------------------ | ------ |
| HTTPS Enabled            | ✅      |
| ACM Certificate          | ✅      |
| IAM Least Privilege      | ✅      |
| Security Groups Reviewed | ✅      |
| CloudFront Configured    | ✅      |
| Monitoring Enabled       | ✅      |
| Budget Alerts Enabled    | ✅      |
| CI/CD Secured            | ✅      |
 
---
 
# 📂 Repository Structure
 
```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── styles.css
├── app.js
├── README.md
│
└── LICENSE
```
 
---
 
# 🔄 CI/CD Workflow
 
The deployment workflow automatically:
 
1. Detects pushes to `main`
2. Connects to EC2 through SSH
3. Pulls latest code
4. Restarts Apache
5. Deploys updates automatically
 
---
# 🛡️ Security & Compliance
 
Security was a major focus throughout the project. Multiple layers of protection were implemented to secure the application and AWS infrastructure.
 
### Security Measures Implemented
 
✅ HTTPS encryption using AWS Certificate Manager (ACM)
 
✅ SSL/TLS certificates attached to the Application Load Balancer
 
✅ CloudFront configured to enforce secure HTTPS connections
 
✅ Security Groups reviewed and hardened
 
✅ IAM policies following the Principle of Least Privilege
 
✅ Controlled administrative access through SSH key authentication
 
✅ CloudFront cache and behavior policies configured
 
✅ Application Load Balancer listener rules configured for HTTP → HTTPS redirection
 
✅ Continuous monitoring through CloudWatch alarms and logs
 
---
 
# 📋 Final Deployment Checklist
 
### 🏗️ Infrastructure
 
* [x] EC2 Instance Provisioned
* [x] Apache HTTP Server Installed
* [x] Mental Health Finder Application Deployed
* [x] Target Group Configured
* [x] Application Load Balancer Configured
* [x] Domain Connected
 
### 🔒 HTTPS & Certificates
 
* [x] ACM Certificate Requested
* [x] ACM Certificate Validated
* [x] HTTPS Listener Configured
* [x] HTTP → HTTPS Redirection Enabled
 
### 🌐 Content Delivery Network
 
* [x] CloudFront Distribution Created
* [x] Custom Domain Attached
* [x] CloudFront Behaviors Configured
* [x] Static Asset Caching Enabled
 
### 🛡️ Security
 
* [x] Security Groups Audited
* [x] IAM Permissions Reviewed
* [x] Least Privilege Principles Applied
* [x] Open Ports Documented
 
### 🚀 DevOps & Automation
 
* [x] GitHub Repository Configured
* [x] GitHub Actions Workflow Created
* [x] SSH Deployment Automation Configured
* [x] Automatic Deployments Tested Successfully
 
### 📊 Monitoring & Observability
 
* [x] CloudWatch CPU Alarm Configured
* [x] CloudWatch ALB 5XX Alarm Configured
* [x] CloudWatch Logs Enabled
* [x] 7-Day Log Retention Configured
 
### 💰 Cost Management
 
* [x] AWS Budget Created
* [x] Budget Alerts Configured
* [x] Free Tier Usage Monitored
 
---
 
# 🚧 Challenges Faced
 
Building a production-style cloud environment introduced several real-world challenges that required troubleshooting and iterative improvements.
 
 
 
### 🔹 CloudFront Redirect Loops
 
Resolved by:
 
* Reviewing origin protocol policies
* Fixing redirect configuration
 
### 🔹 SSL Certificate Issues
 
Resolved by:
 
* Correct ACM region selection
* Proper certificate attachment
 
### 🔹 Apache Configuration Errors
 
Resolved through:
 
* Config validation
* DocumentRoot corrections
 
### 🔹 GitHub Actions Failures
 
Resolved through:
 
* YAML syntax fixes
* SSH key configuration
* Apache service troubleshooting
 
 
---
 
# 🚀 Future Enhancements
 
Although the project meets all capstone requirements, several improvements could further enhance scalability, security, and reliability.
 
### Infrastructure
 
* Multi-AZ deployment for high availability
* Auto Scaling Group implementation
* Route 53 DNS management
 
### Security
 
* AWS WAF integration
* Advanced CloudFront origin protection
* Automated security auditing
 
### DevOps
 
* Infrastructure as Code (Terraform)
* Blue/Green deployment strategy
* Automated rollback capability
 
### Monitoring
 
* Custom CloudWatch Dashboards
* Centralized application monitoring
* Enhanced alerting and notification workflows
 
### Application
 
* Database integration
* User authentication and authorization
* Enhanced search and resource management features
 
---
 
# 👥 Contributors
 
### Project Team
 
🧑‍💻 Jemimah Ninson
 
☁️ Edmund Fiattor
 
⚙️ Augustus Aidoo
 
🔐 Sarah Mensah
 
---
 
# 📄 License
 
This project is licensed under the **GNU General Public License v3.0**.
 
Feel free to use, modify, and distribute this project in accordance with the license terms.
 
---
 
 
# 📚 Key Lessons Learned
 
* Designing cloud infrastructure
* Implementing layered security
* Configuring HTTPS correctly
* Using CloudFront with ALB
* Automating deployments
* Monitoring production workloads
* Managing AWS costs
 
---
 
# 🎉 Project Outcome
 
Successfully designed and deployed a secure cloud-hosted application using:
 
✅ CloudFront
 
✅ Application Load Balancer
 
✅ EC2
 
✅ S3
 
✅ IAM
 
✅ ACM
 
✅ CloudWatch
 
✅ GitHub Actions
 
✅ AWS Budgets
 
This project demonstrates real-world cloud architecture, security hardening, CI/CD automation, monitoring, and operational best practices using AWS Free Tier services.
 
 
 
 
