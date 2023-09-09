document.addEventListener('DOMContentLoaded', function () {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Function to update UTC time in milliseconds
    function updateUTCTime() {
        const currentUTCTimeMillis = new Date().getTime();
        currentUTCTime.textContent = `Current UTC Time (ms): ${currentUTCTimeMillis}`;
    }

    function updateDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayIndex = new Date().getDay();
        const currentDay = daysOfWeek[currentDayIndex];

        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        const year = currentDate.getFullYear();

        currentDayOfTheWeek.textContent = `Today is ${currentDay}, ${day} ${month} ${year}`;
    }

    updateUTCTime();
    updateDayOfTheWeek();

    setInterval(updateUTCTime, 1000);

    setInterval(updateDayOfTheWeek, 86400000);

    slackUserName.textContent = "Trefania Tariro Vhareta";
    slackDisplayImage.src = "tref-slack.png";
    slackDisplayImage.alt = "Trefania";
});
