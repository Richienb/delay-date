const test = require("ava")
const inRange = require("in-range")
const timeSpan = require("time-span")
const addTime = require("add-time")
const delayDate = require(".")

test("main", async t => {
	const end = timeSpan()
	await delayDate(addTime.now({ seconds: 1 }))
	t.true(inRange(end.seconds(), { start: 0.8, end: 1.2 }))
})
