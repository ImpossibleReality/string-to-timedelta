// Licensed under the MIT license
// Copyright (c) 2020 Wickedtree Development

timeRegex = /(?:(?:([0-9]+)(?:d| ?days?)(?:, ?| )?)|(?:([0-9]+)(?:h| ?hours?| ?hrs?)(?:, ?| )?)|(?:([0-9]+)(?:m| ?minutes?| ?hrs?)(?:, ?| )?)|(?:([0-9]+)(?:s| ?seconds?)(?:,(?: ?and)? ?| )?))/gi
function test(data) {
    return timeRegex.test(data/*.trim()*/)
}
function parse(/*startD*/data) {
    //data = startData.trim()
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
    return time
}

module.exports = { test, parse }