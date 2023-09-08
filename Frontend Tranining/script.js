document.addEventListener('DOMContentLoaded', function() {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Get current date and time
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];
    const currentHour = now.getUTCHours();
    const currentMinute = now.getUTCMinutes();

    // Update elements with data
    slackUserName.textContent = "Your Slack Name"; // Replace with your Slack name
    slackDisplayImage.src = "slack-profile-image.jpg"; // Replace with your Slack profile image URL
    slackDisplayImage.alt = "Your Slack Username"; // Replace with your Slack username
    currentDayOfTheWeek.textContent = `Current Day: ${currentDay}`;
    currentUTCTime.textContent = `Current UTC Time: ${currentHour}:${currentMinute}`;
});
