# Automated CI/CD Pipeline for React App Deployment on AWS EC2 using Jenkins, Docker, Terraform, and Ansible

This project demonstrates the implementation of a Continuous Integration (CI) and Continuous Deployment (CD) pipeline for deploying a React-based Todo app to an AWS EC2 instance using **Jenkins**. The pipeline automates the process of building, testing, and deploying the app using Docker, Terraform, and Ansible. 

---

## Project Overview

This project automates the CI/CD process for a React-based Todo app by leveraging Jenkins to manage the entire pipeline. The pipeline performs the following steps:

1. **Code Pull**: The latest version of the React Todo app is pulled from the GitHub repository.
2. **Docker Image Build & Test**: The app is containerized using Docker, and the Docker image is built and tested.
3. **Terraform Infrastructure Provisioning**: Terraform is used to provision an AWS EC2 instance for hosting the app.
4. **Ansible Configuration**: Ansible is used to install Docker on the EC2 instance, copy the necessary app files, and run the Docker container.
5. **App Deployment**: Once the infrastructure is provisioned and configured, the Todo app is deployed, and it can be accessed via the public IP of the EC2 instance.

---

## Technologies Used

- **Jenkins**: Automates the entire CI/CD pipeline.
- **React**: Frontend framework for building the Todo app.
- **Docker**: Containerization of the React app for deployment.
- **Terraform**: Provisioning AWS EC2 instance for the app infrastructure.
- **Ansible**: Configuring the EC2 instance, installing Docker, and deploying the app.
- **AWS EC2**: Cloud infrastructure for hosting the React Todo app.

---

## Pipeline Workflow

The pipeline automates the following steps:

1. **GitHub Action Trigger**: A push to the GitHub repository triggers the Jenkins pipeline.
2. **Docker Build & Test**: Jenkins builds the Docker image and runs tests to ensure the app works as expected.
3. **Terraform Integration**: Terraform provisions the required AWS EC2 instance with necessary resources (e.g., security groups, instance configurations).
4. **Ansible Deployment**: Ansible installs Docker on the EC2 instance, copies the required app files, and starts the Docker container.
5. **Access the Application**: Once deployed, the Todo app is accessible via the public IP of the EC2 instance.

---

## Access the Application

Once the CI/CD pipeline has successfully run, you can view the deployed Todo app by navigating to the public IP address of the AWS EC2 instance in your web browser.


