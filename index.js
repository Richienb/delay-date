"use strict"

const delay = require("delay")

module.exports = async date => {
	const waitTime = new Date(date).getTime() - Date.now()

	if (waitTime < 0) {
		throw new Error("Can not wait for a date in the past!")
	}

	await delay(waitTime)
}
