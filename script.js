const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resEl = document.getElementById("result");

// Set max date to today
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    dobEl.max = today;
});

btnEl.addEventListener("click", calculateAge);

function calculateAge() {
    const bdayValue = dobEl.value;

    if (bdayValue === "") {
        resEl.style.color = "red";
        resEl.innerText = "⚠️ Please enter your date of birth!";
        return;
    }

    const age = getFullAge(bdayValue);
    resEl.style.color = "green";
    resEl.innerText = `🎉 You are ${age.years} ${age.years === 1 ? "year" : "years"}, ${age.months} month(s), and ${age.days} day(s) old.`;
}

function getFullAge(bdayValue) {
    const birthDate = new Date(bdayValue);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
