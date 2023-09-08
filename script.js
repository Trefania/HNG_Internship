document.addEventListener('DOMContentLoaded', function () {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Get current UTC time in milliseconds
    const currentUTCTimeMillis = new Date().getTime();

    // Update elements with the current UTC time in milliseconds
    slackUserName.textContent = "Trefania Tariro Vhareta";
    slackDisplayImage.src = "tref-slack.png";
    slackDisplayImage.alt = "Trefania";
    currentDayOfTheWeek.textContent = `Current Day: Fri 08 September`;
    currentUTCTime.textContent = `Current UTC Time (ms): ${currentUTCTimeMillis}`;
});
