import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultsData = [
    {
      "id": 1,
      "name": "Ayaan",
      "physics": 85,
      "math": 90,
      "biology": 78,
      "english": 88
    },
    {
      "id": 2,
      "name": "Sara",
      "physics": 72,
      "math": 84,
      "biology": 80,
      "english": 75
    },
    {
      "id": 3,
      "name": "Zayan",
      "physics": 90,
      "math": 95,
      "biology": 92,
      "english": 89
    },
    {
      "id": 4,
      "name": "Nora",
      "physics": 60,
      "math": 68,
      "biology": 74,
      "english": 70
    },
    {
      "id": 5,
      "name": "Ibrahim",
      "physics": 88,
      "math": 85,
      "biology": 90,
      "english": 86
    },
    {
      "id": 6,
      "name": "Ayesha",
      "physics": 78,
      "math": 80,
      "biology": 76,
      "english": 82
    },
    {
      "id": 7,
      "name": "Farhan",
      "physics": 68,
      "math": 75,
      "biology": 72,
      "english": 65
    },
    {
      "id": 8,
      "name": "Layla",
      "physics": 92,
      "math": 88,
      "biology": 85,
      "english": 91
    },
    {
      "id": 9,
      "name": "Omar",
      "physics": 80,
      "math": 78,
      "biology": 70,
      "english": 77
    },
    {
      "id": 10,
      "name": "Fatima",
      "physics": 95,
      "math": 93,
      "biology": 89,
      "english": 94
    }
]


const Results = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={resultsData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"biology"} stroke='#ffaa11'></Line>
            </LineChart>
        </div>
    );
}

export default Results;