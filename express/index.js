var users = [{
    name: "Arush",
    kidneys: [{
        health: false
    }]
}];

console.log(users);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const userKidneys = users[0].kidneys;
    const kidneyLength = userKidneys.length;
    var healthyKidney = 0;

    for (var i = 0; i < kidneyLength; i++) {
        if (userKidneys[i].health) {
            healthyKidney++;
        }
    }

    res.json({
        userKidneys, // Corrected variable name
        kidneyLength,
        healthyKidney
    });
});

app.listen(3000);

