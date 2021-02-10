# FamilyTreeBuilder

Application to build a Family Tree. The API portion is built on serverless with the use of serverless-offline. Designed to be able to run locally or portable to cloud providers.
The Code with be primarily AWS Lambda based.

The GUI is written to be statically hosted leveraging Angular

Topics Covered:
- Recursion
- Graph Traversal

Areas of Improvement:
- As the data set grows the plan of using an ORM and SQL will not scale

Prerequisites:
- SQL Database
- Postman or other method of hitting API endpoint
- npm
- node
- serverless (npm install -g serverless)