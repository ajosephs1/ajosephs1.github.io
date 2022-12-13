
function translatePigLatin() {
    let str = document.getElementById('english').value
    str = str.split(" ")
    let newArr = []
    for (let i = 0; i < str.length; i++) {

        if (str[i][0] === "a" || str[1][0] === "e" || str[i][0] === "i" || str[i][0] === "o" || str[i][0] === "u") {
            newArr.push(str[i] += "way")
        }
        else if (/([^aeiou]{1,})([aeiou])(\w+)/.test(str[i])) {
            newArr.push(str[i].replace(/([^aeiou]{1,})([aeiou])(\w+)/, "$2$3$1ay"))
            console.log(str)
        }
        else {
            newArr.push(str[i] += "ay")
        }

    }
    document.getElementById("pig").value = newArr.join(" ");
}

