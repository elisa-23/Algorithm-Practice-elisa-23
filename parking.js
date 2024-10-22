function parkingSpaces(N,yesterday,today) {
    let occupied = 0;

    for (i=0; i<N; i++) {
        if (yesterday.charAt(i) === today.charAt(i)) {
            if (yesterday.charAt(i) === "C") {
                occupied++;
            }else {
                console.log("This parking spot was never occupied today or yesterday.")
            }
        }else if (yesterday.charAt(i) != ("C" || ".") || today.charAt(i) != ("C" || ".")) {
            return "ERROR: You recorded the data wrong for yesterday or today."
        }
        else {
            if (yesterday.charAt(i) === ".") {
                console.log("This parking spot wasn't occupied yesterday.")
            }else {
                console.log("This parking spot wasn't occupied today.")
            }
        }
    }
    return occupied + " spaces were occupied today and yesterday."
}