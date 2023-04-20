const userScores = [
    ['john@example.com', 10, 100, 100, 100],
    ['jane@example.com', 10, 200, 200, 200],
    ['bob@example.com', 20, 300, 300, 300],
    ['pob@example.com', 20, 300, 300, 300],
    ['lob@example.com', 20, 300, 300, 300],
    ['lob@example.com', 20, 300, 300, 300],
];

const tbody = document.getElementById('scores');

// Iterate through each score object and append a new row to the table body
for (let i = 0; i < userScores.length; i++) {
    const row = document.createElement('tr');
    const emailCell = document.createElement('td');
    const scoreCell = document.createElement('td');
    const timeScore1 = document.createElement('td');
    const timeScore2 = document.createElement('td');
    const timeScore3 = document.createElement('td');

    let scoreList = [emailCell, scoreCell, timeScore1, timeScore2, timeScore3];

    emailCell.textContent = userScores[i][0];
    scoreCell.textContent = userScores[i][1];
    timeScore1.textContent = userScores[i][2];
    timeScore2.textContent = userScores[i][3];
    timeScore3.textContent = userScores[i][4];


    for(let i = 0; i< scoreList.length; i++)
    row.appendChild(scoreList[i]);

    tbody.appendChild(row);
}




