function calculateHours() {
    const goalTickets = parseInt(document.getElementById('goalTickets').value);
    const collectedTickets = parseInt(document.getElementById('collectedTickets').value);
    const result = document.getElementById('result');

    if (isNaN(goalTickets) || isNaN(collectedTickets) || goalTickets <= 0 || collectedTickets < 0 || collectedTickets > goalTickets) {
        result.innerText = "Please enter valid numbers.";
        return;
    }

    const currentDate = new Date();
    const endDate = new Date('2024-08-31T23:59:59');
    const remainingDays = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));

    if (remainingDays < 0) {
        result.innerText = "The event has already ended.";
        return;
    }

    const remainingTickets = goalTickets - collectedTickets;
    const hoursPerDay = remainingTickets / remainingDays;

    if (remainingDays === 0) {
        result.innerText = "Today is the last day! You need to code all remaining hours today!";
    } else {
        result.innerText = `You need to code ${hoursPerDay.toFixed(2)} hours per day to reach your goal.`;
    }
}
