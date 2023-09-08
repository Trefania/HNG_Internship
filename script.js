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

    // Initial call to update UTC time
    updateUTCTime();

    // Update UTC time in milliseconds every second (1000ms)
    setInterval(updateUTCTime, 1000);

    // Other data
    slackUserName.textContent = "Trefania Tariro Vhareta";
    slackDisplayImage.src = "tref-slack.png";
    slackDisplayImage.alt = "Trefania";
    currentDayOfTheWeek.textContent = `Current Day: Fri 08 September`;
});
