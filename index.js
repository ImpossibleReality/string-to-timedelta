// Licensed under the MIT license
// Copyright (c) 2020 Wickedtree Development

timeRegex = /(?:(?:([0-9]+)(?:d| ?days?)(?:, ?| )?)|(?:([0-9]+)(?:h| ?hours?)(?:, ?| )?)|(?:([0-9]+)(?:m| ?minutes?)(?:, ?| )?)|(?:([0-9]+)(?:s| ?seconds?)(?:,(?: ?and)? ?| )?))/gi
function test(data) {
    return timeRegex.test(data)
}
function parse(data) {
    if (!test(data)) {
        return null
    }
    timeRegex.lastIndex = 0
    let time = 0
    while ((m = timeRegex.exec(data)) !== null) {
        if (m.index === timeRegex.lastIndex) {
            timeRegex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            if (groupIndex == 1 && match) {
                time += parseInt(match) * 86400000
            }
            if (groupIndex == 2 && match) {
                time += parseInt(match) * 3600000
            }
            if (groupIndex == 3 && match) {
                time += parseInt(match) * 60000
            }
            if (groupIndex == 4 && match) {
                time += parseInt(match) * 1000
            }
        });
    }
    /*
    for (match in results) {
        console.log(match)
        if (match[1]) {
            time += parseInt(match[1]) * 86400000
        }
        if (match[2]) {
            time += parseInt(match[2]) * 3600000
        }
        if (match[3]) {
            time += parseInt(match[3]) * 60000
        }
        if (match[4]) {
            time += parseInt(match[4]) * 1000
        }
    }
    */
    return time
}
module.exports = { test, parse }