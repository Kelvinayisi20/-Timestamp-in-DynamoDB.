AWS Serverless Project with Python (boto3): S3, DynamoDB, Lambda, API Gateway & CloudWatch

This project demonstrates how to build a basic serverless backend using AWS services and Python. It involves creating a DynamoDB table and S3 bucket using Python (boto3), uploading a file to S3, deploying a Lambda function to handle incoming data, exposing it through an API Gateway, and using CloudWatch to monitor and debug execution. The API was then integrated into an existing frontend interface.

Project Components

Amazon S3 Bucket

Created using Python (boto3)

Uploaded an image file using boto3

DynamoDB Table

Created using Python (boto3)

Defined pk (partition key) and sk (sort key)

AWS Lambda Function

Written in Python

Triggered via an API Gateway endpoint

Accepts JSON data and inserts it into the DynamoDB table

API Gateway

REST API created to expose the Lambda function via HTTP POST

Used to send data from the frontend to the backend

Existing Frontend Integration

A ready-made frontend (HTML/JavaScript) was provided

I added my API Gateway endpoint to the script.js file

Form data submitted from the frontend was sent to the backend and stored in DynamoDB

Amazon CloudWatch

Used to monitor Lambda logs

Helped verify request payloads

Helped identify and fix errors during development

Actions Performed

Created S3 Bucket and Uploaded Image
Used Python and boto3 to create an S3 bucket and upload an image file.

Created DynamoDB Table
Programmatically created a DynamoDB table named "Frontend" using boto3. The table uses "pk" as the partition key and "sk" as the sort key.

Created Lambda Function
Deployed a Lambda function in Python that accepts JSON payloads, extracts user data, and stores it in DynamoDB. The Lambda function assigns "pk" as "user" and "sk" using the user's email address.

Created API Gateway
Built a REST API using API Gateway and linked it to the Lambda function. Enabled POST requests and deployed to the production stage.

Integrated API into Existing Frontend
A frontend was provided. I did not build it but integrated my API by editing the script.js file to include the API Gateway endpoint. This allowed the form to send user data to my Lambda function.

Submitted Sample Data
Submitted the following data through the frontend form:

Full Name: Kelvin

Phone: 0507969170

Role: Manager

Email: ayisikelvin09@icloud.com

The data was successfully saved in DynamoDB with "pk" set to "user" and "sk" set to the email.

Monitored and Debugged with CloudWatch
Used Amazon CloudWatch Logs to verify that the Lambda function executed successfully. Checked printed logs for incoming event data and confirmed that data was stored correctly in DynamoDB. Resolved any issues (like missing modules or JSON errors) by inspecting logs.

Technologies Used

AWS Lambda

Amazon API Gateway

Amazon DynamoDB

Amazon S3

Amazon CloudWatch

Python 3.x

boto3 (AWS SDK for Python)

JavaScript (for integration)
