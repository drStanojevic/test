$(document).ready(updateData);

setInterval(updateData, 3600000)

function updateData() {

    fetch('data.json').then(response => response.json()).then(jsonData => {
        let sum = jsonData.reduce((a, b) => { return a + b.amount }, jsonData[0].amount);
        let max = 0;
        let maxSpentDay = "";

        for (let entry of jsonData) {
            $("#" + entry.day).css("height", `${entry.amount}` + "%");
            $("#" + entry.day).children().text(`$${entry.amount}`);
            if (max < entry.amount) {
                max = entry.amount;
                maxSpentDay = entry.day;
            }
        }
        $("#" + maxSpentDay).addClass("barMax")
        $("#total").text("$" + sum);
        console.log("Data updated")
    })

}