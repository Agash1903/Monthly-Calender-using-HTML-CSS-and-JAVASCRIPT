document.addEventListener('DOMContentLoaded', () => {
    const monthYearElem = document.getElementById('month-year');
    const calendarDatesElem = document.getElementById('calendar-dates');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Set month and year text
        monthYearElem.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Clear existing dates
        calendarDatesElem.innerHTML = '';

        // Get the first day of the month and the number of days in the month
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        // Get today's date
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();

        // Create empty slots before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            calendarDatesElem.appendChild(emptyDiv);
        }

        // Create day slots for each day of the month
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            // Highlight today's date
            if (year === todayYear && month === todayMonth && i === todayDate) {
                dayDiv.classList.add('current-day');
            }

            calendarDatesElem.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});
