function countdown() {
	const now = new Date();
	const eventDate = new Date("September 09, 2023 00:00:00");
	const currentTime = now.getTime();
	const eventTime = eventDate.getTime();

	const remainingTime = eventTime - currentTime;

	const seconds = Math.floor(remainingTime / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	const displayDays = days;
	const displayHours = hours % 24;
	const displayMinutes = minutes % 60;
	const displaySeconds = seconds % 60;

	document.getElementById("countdown").innerHTML = `
		${displayDays}d : ${displayHours}h : ${displayMinutes}m : ${displaySeconds}s
	`;
}

countdown();

setInterval(countdown, 1000);
