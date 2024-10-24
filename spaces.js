function parkingSpaces(N, yesterday, today) {
    let occupied = 0;
    if (yesterday.length != N && today.length != N) {
        return "ERROR: You recorded different sets of parking spaces. (not the same amount)";
    } else {
        for (let i = 0; i < N; i++) {
            console.log(yesterday[i] + " " + today[i]);
            if (yesterday[i] === today[i]) {
                if (yesterday[i] === "C") {
                    occupied++;
                } else {
                    console.log("This parking spot was never occupied today or yesterday.");
                }
            } else if ((yesterday[i] != "C" && yesterday[i] != ".") || (today[i] != "C" && today[i] != ".")) {
                return "ERROR: You recorded the data wrong for yesterday or today.";
            } else {
                if (yesterday[i] === ".") {
                    console.log("This parking spot wasn't occupied yesterday.");
                } else {
                    console.log("This parking spot wasn't occupied today.");
                }
            }
        }
        return occupied + " spaces were occupied today and yesterday.";
    }
}

console.log(parkingSpaces(5, "CC..C", "C.C.C"));