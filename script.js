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
        const currentDate = new Date();
        const options = { weekday: 'short', day: '2-digit', month: 'short' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        currentDayOfTheWeek.textContent = `Current Date: ${formattedDate.toUpperCase()}`;
    }

    updateUTCTime();
    updateDayOfTheWeek();

    setInterval(updateUTCTime, 1000);

    setInterval(updateDayOfTheWeek, 86400000); 

    slackUserName.textContent = "Trefania Tariro Vhareta";
    slackDisplayImage.src = "tref-slack.png";
    slackDisplayImage.alt = "Trefania";
});

