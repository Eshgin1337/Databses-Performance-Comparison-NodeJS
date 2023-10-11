# Comparative Performance Evaluation of MongoDB and MySQL in a NodeJS Environment

Hello. This project is intended to evaluate the performances of two different databases in the NodeJS environment: in one's case the database is MongoDB, and in another's case it is MySQL. Both API routes written in NodeJS are used to create a "users" table and insert two parameters namely "email" and "password". In this process, I have used a popular tool named "Gatling" to evaluate the performances of both MongoDB and MySQL applications and make comparisons. The testing process has been carried out in a few scenarios; I have used the same number of insertations, but the number of requests per second varies for each case and double-testing has been conducted to ensure the results' preciseness. There are total 10000 total "email-password" pairs which were  extracted from the website: <a>"website_link"</a>. In this report, I will explain how you can install and set up the environment to perform the testing process on your own.
(If you want to familiarize yourself with the testing process of mine you can find the detailed explaination and comparison of results in <a>"mymediumlink"<a/>


## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [MongoDB Configuration](#mongodb-configuration)
  - [MySQL Configuration](#mysql-configuration)
  - [Configure Gatling for Performance Testing](#configure-gatling-for-performance-testing)
- [Viewing Results](#viewing-results)
- [Additional Information](#additional-information)

## Prerequisites

Before running the tests, ensure that you have the following software installed on your local machine:

- [MongoDB v5.0.3](https://docs.mongodb.com/manual/installation/)
- [NodeJS v14.17.6](https://nodejs.org/en/download/)
- [MySQL Community Server v8.0.26](https://dev.mysql.com/downloads/mysql/)

## Getting Started

1. **Clone this repository:**

```bash
    git clone https://github.com/Eshgin1337/Databses-Performance-Comparison-NodeJS.git
    cd Databses-Performance-Comparison-NodeJS
```

2. **Install necessary libraries:**

### MongoDB Configuration
* No specific configuration needed. Just MongoDB server being installed on your computer is enough.
* Run MongoDB API using:
```bash
    node mongoDB-API.js
```

### MySQL Configuration
* Launch MySQL server in CMD and create a database named "users":
```sql
    create database users;
```
* In mysql-API.js, update the connection details:
```javascript
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername or root",
        password: "yourpassword",
        database: "users"
    });
```
* Run MySQL API using:
```bash
    node mysql-API.js
```

### Configure Gatling for Performance Testing
The directory structure may depend on your current version of Gatling downloaded. In this readme, I explain how to use the latest version when I prepared the readme which is  "3.9.5".
* Download Gatling from <a href="https://gatling.io/open-source/">here</a>.
* Unzip the downloaded file and navigate to the extracted directory.
* Create a folder named "test" inside:
```bash
    {your-path-to-gatling-location}\gatling-charts-highcharts-bundle-3.9.5\user-files\simulations
```
* Copy `post_test_mongodb.scala` and `post_test_mysql.scala` files from "testScripts" folder of the cloned repository to:
```bash
    {your-path-to-gatling-location}\gatling-charts-highcharts-bundle-3.9.5\user-files\simulations\test
```
* Copy `usernames-passwords-list.csv` from "assets\data" in the repository to:
```bash
    {your-path-to-gatling-location}\gatling-charts-highcharts-bundle-3.9.5\user-files\resources
```
If you want to customize the load you can follow the steps below:
* Open the copied simulation files (e.g., post_test_mongodb.scala and post_test_mysql.scala) in a text editor.

* Inside the scripts, you can customize the following parameters based on your testing requirements:
```scala
    constantUsersPerSec(200).during(50.seconds)
```
&nbsp;&nbsp;&nbsp;&nbsp; `constantUsersPerSec(200)`: Number of requests per second. <br>
&nbsp;&nbsp;&nbsp;&nbsp; `.during(50.seconds)`: Duration of the test.

* Save the changes to the simulation files.

* Launch Gatling:
```bash
    cd {your-path-to-gatling-location}\gatling-charts-highcharts-bundle-3.9.5\bin
    gatling
```
* Choose the simulation number (e.g., [0] for MongoDB, [1] for MySQL).
* Skip the "Select run description (optional)" prompt by pressing "Enter".
* Gatling will use the configured parameters from the simulation files.

## Viewing Results
* Reports will be available in:
```bash
    {your-path-to-gatling-location}\gatling-charts-highcharts-bundle-3.9.5\results
```
* Open `index.html` in your browser to visualize the test results.

## Additional Information
* It is not recommended to run both MongoDB and MySQL routes simultaneously during testing. If you want to test both, adjust the port number in the API scripts accordingly.
* Make sure the API route runs successfully before testing.
* Test scripts can be customized for the number of requests per second and duration.
* Feel free to replicate the test and contribute to the research