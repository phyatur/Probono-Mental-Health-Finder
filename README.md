# Pro Bono Mental Health Finder

## AWS Cloud Capstone Project

### Team Members

| Name     | Role                   |
| -------- | ---------------------- |
| Fiattor | AWS IAM & Security     |
| Jemimah | EC2 & Networking       |
| Augustus | GitHub & CI/CD         |
| Sarah | Documentation & Trello |

---

# Project Overview

## Problem Statement

Mental health support can be difficult to access due to high costs and lack of awareness of available resources.

The **Pro Bono Mental Health Finder** is a web application that helps users discover:

* Pro bono psychologists
* Low-cost mental health providers
* Community support services
* Crisis hotlines
* Trusted mental health organizations

This project demonstrates how to design, deploy, and secure a cloud-based web application using AWS Free Tier services.

---

# Project Objectives

This capstone project focuses on:

* AWS Cloud Architecture
* Secure Infrastructure Deployment
* Load Balancing
* Content Delivery Networks (CDN)
* HTTPS Encryption
* GitHub Version Control
* CI/CD Automation
* Cost Awareness and Monitoring

---

# Architecture Overview

## Final Architecture

```text
User Browser
      ↓
CloudFront (HTTPS CDN)
      ↓
Application Load Balancer (ALB)
      ↓
EC2 Instance
      ↓
Static Web Application
```

### Optional Static Assets

```text
S3 Bucket
    ↓
CloudFront
```

---

# Technologies Used

## AWS Services

* Amazon EC2
* Amazon S3
* AWS IAM
* AWS Certificate Manager (ACM)
* Application Load Balancer (ALB)
* Amazon CloudFront
* Amazon CloudWatch
* AWS Budgets

## Development Tools

* Git
* GitHub
* GitHub Actions
* Trello
* AWS CLI

## Front-End Technologies

* HTML5
* CSS3
* JavaScript

---

# Phase 1 – Project Setup & Environment Configuration

## Goal

The goal of Phase 1 was to establish a secure AWS environment and prepare all tools required for development and deployment.

---

# Step 1: AWS Free Tier Account Setup

## What We Did

Created an AWS Free Tier account.

Enabled:

* Root account protection
* Multi-Factor Authentication (MFA)

## Why

The AWS root account has unrestricted access to all AWS services.

For security reasons:

* Root account is only used for account administration.
* Daily work is performed using IAM users.

### Security Best Practice

Never use the root account for development or deployment.

---

# Step 2: IAM User and Permission Setup

## What We Did

Created individual IAM users for each team member.

Example users:

* Fiattor
* Jemimah
* Augustus
* Sarah

Assigned users to an IAM group.

Enabled:

* Console access
* Password reset on first login
* MFA

## Why

IAM provides:

* Accountability
* Access control
* Least-privilege security

### Security Principle

Each user receives only the permissions necessary to complete assigned tasks.

---

# Step 3: AWS CLI Installation and Configuration

## What We Did

Installed AWS CLI on local machines.

Verified installation:

```bash
aws --version
```

Configured AWS credentials:

```bash
aws configure --profile profileName
```

Example configuration:

```text
AWS Access Key ID
AWS Secret Access Key
Region: us-east-1
Output Format: json
```

## Why

AWS CLI allows us to interact with AWS services from the command line.

Benefits:

* Faster administration
* Automation support
* CI/CD integration

### Verification

```bash
aws sts get-caller-identity --profile profileName
```

---

# Step 4: GitHub Repository Setup

## What We Did

Created GitHub repository:

```text
pro-bono-mental-health-finder
```

Created branching strategy:

```text
main
develop
feature/*
```

Example feature branches:

```text
feature/home-page
feature/contact-form
feature/resources-page
```

## Why

GitHub provides:

* Source control
* Collaboration
* Version history
* Code review workflows

### Workflow

```text
Feature Branch
      ↓
Pull Request
      ↓
Develop
      ↓
Main
```

---

# Step 5: Trello Board Setup

## What We Did

Created a Trello board to manage project tasks.

Columns:

* Backlog
* In Progress
* Review
* Done

## Why

Trello helps the team:

* Track progress
* Assign responsibilities
* Monitor deadlines
* Visualize project status

---

# Step 6: EC2 Instance Deployment

## What We Did

Launched an EC2 instance.

Configuration:

* Amazon Linux 2023
* t2.micro
* AWS Free Tier eligible

Created a key pair:

```text
mental-health-key.pem
```

## Why

EC2 acts as the web server hosting our application.

---

# Step 7: Security Group Configuration

## What We Did

Created a Security Group allowing:

| Protocol | Port | Source          |
| -------- | ---- | --------------- |
| HTTP     | 80   | Internet        |
| HTTPS    | 443  | Internet        |
| SSH      | 22   | Team IP Address |

## Why

Security Groups act as virtual firewalls.

Benefits:

* Restrict unauthorized access
* Protect infrastructure
* Reduce attack surface

### Best Practice

SSH should only be allowed from trusted IP addresses.

---

# Step 8: EC2 Access and Server Preparation

## What We Did

Connected to EC2 using SSH.

Example:

```bash
ssh -i mental-health-key.pem ec2-user@PUBLIC-IP
```

Updated packages:

```bash
sudo dnf update -y
```

Installed Git:

```bash
sudo dnf install git -y
```

## Why

Preparing the server ensures it is secure and ready for deployment.

---

# Step 9: Amazon S3 Bucket Creation

## What We Did

Created an S3 bucket for static assets.

Examples:

* Images
* CSS
* JavaScript files

Enabled:

```text
Block Public Access = ON
```

## Why

S3 provides scalable cloud storage.

Benefits:

* Durable storage
* Cost-effective
* Integrates with CloudFront

### Security

The bucket remains private until CloudFront access is configured.

---

# Step 10: SSL/TLS Certificate Request

## What We Did

Requested a public SSL/TLS certificate through AWS Certificate Manager (ACM).

Region:

```text
us-east-1
```

Used DNS validation.

## Why

SSL certificates allow:

* HTTPS encryption
* Secure browser connections
* CloudFront HTTPS support

### Security Benefit

Protects data in transit between users and the application.

---

# Repository Structure

## Current Structure

```text
pro-bono-mental-health-finder/
│
├── README.md
├── index.html
├── styles.css
├── app.js
└── .gitignore
```

---

# Security Practices Implemented

* Root account protected with MFA
* Individual IAM users
* Least-privilege permissions
* SSH restricted to trusted IP addresses
* HTTPS planned through ACM
* Private S3 bucket configuration
* GitHub version control and review process

---

# Cost Management

To remain within AWS Free Tier limits:

* Use one t2.micro EC2 instance
* Delete unused resources
* Monitor AWS Budgets
* Monitor CloudWatch metrics

---

# Project Status

✅ AWS Account Created
✅ IAM Users Configured
✅ AWS CLI Installed
✅ GitHub Repository Created
✅ Trello Board Created
✅ EC2 Instance Launched
✅ Security Groups Configured
✅ S3 Bucket Created
✅ ACM Certificate Requested

🔄 Next Phase: Web Application Development & Deployment

---

# Learning Outcomes

Through this project we will gain practical experience with:

* AWS Cloud Architecture
* IAM Security
* EC2 Administration
* S3 Storage
* CloudFront CDN
* Application Load Balancers
* SSL/TLS Certificates
* GitHub Workflows
* CI/CD Automation
* Cloud Monitoring

---

# References

### AWS Documentation

https://docs.aws.amazon.com

### GitHub Documentation

https://docs.github.com

### Trello Documentation

https://trello.com/guide
