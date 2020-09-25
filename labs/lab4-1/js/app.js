let cream = ["#1CC6FF","#97FBD1","#F6A4EC"]

function setup() {
    createCanvas(300,200)

        for(var c = 0; c < cream.length; c++) {
        fill(cream[c])
        rect(40 * c,85,40,20)
    }
}