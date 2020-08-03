let time = document.querySelector('.time');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let clear = document.querySelector('#clear');
let lap = document.querySelector("#lap");
let seconds = 0, minutes = 0, hours = 0, t
function addtime() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}
	time.innerHTML = (hours ? (hours <= 9 ? "0" + hours : hours) : "00") + " : " +
		(minutes ? (minutes <= 9 ? "0" + minutes : minutes) : "00") + " : " +
		(seconds ? (seconds <= 9 ? "0" + seconds : seconds) : "00")
	calltimer();
}
function calltimer() {
	t = setTimeout(addtime, 1000);
}
function laptimer() {
	let newlap = document.createElement("p");
	lap.appendChild(newlap);
	newlap.innerHTML =
		(hours ? (hours <= 9 ? "0" + hours : hours) : "00") + " : " +
		(minutes ? (minutes <= 9 ? "0" + minutes : minutes) : "00") + " : " +
		(seconds ? (seconds <= 9 ? "0" + seconds : seconds) : "00")
}
function stoptimer() {
	clearTimeout(t);
	start.disabled = false;
}
function cleartimer() {
	time.textContent = "00 : 00 : 00";
	lap.innerHTML = "";
	seconds = 0; minutes = 0; hours = 0;
}