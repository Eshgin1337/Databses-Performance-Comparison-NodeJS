import http from 'k6/http';
import { check, sleep } from 'k6';

// Function to read data from a CSV file and return an array of objects
function readUserData() {
    const file = open('/data/usernames-passwords-list.csv');
    const data = file.split('\n');
    const headers = data[0].split(',');

    return data.slice(1).map((line) => {
        const values = line.split(',');
        const user = {};
        for (let i = 0; i < headers.length; i++) {
            user[headers[i].trim()] = values[i].trim();
        }
        return user;
    });
}

export let options = {
    stages: [
        { duration: '10s', target: 1000 } // Ramp up to 1000 requests/second over 10 seconds
    ],
};

const BASE_URL = 'http://localhost:3000';

export default function () {
    const userData = readUserData();
    
    // Randomly select a user from the data
    const randomIndex = Math.floor(Math.random() * userData.length);
    const user = userData[randomIndex];

    const payload = JSON.stringify({
        email: user.email,
        password: user.password,
    });

    const headers = { 'Content-Type': 'application/json' };

    // Make a POST request to the signup route
    const res = http.post(`${BASE_URL}/signup`, payload, { headers });

    check(res, {
        'is successful': (r) => r.status === 200 || r.status === 201,
    });

    // Sleep to achieve the target requests per second
    sleep(1);
}
