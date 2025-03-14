// Translations stored as JavaScript objects
const translations = {
  hebrew: {
    hospital: "בית חולים פלימן",
    ward: "מחלקה ה קומה 2",
    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
  },
  arabic: {
    hospital: "مستشفى فليمان",
    ward: "القسم هـ الطابق 2",
    days: [
      "يوم الاحد",
      "يوم الاثنين",
      "يوم الثلاثاء",
      "يوم الاربعاء",
      "يوم الخميس",
      "يوم الجمعة",
      "يوم السبت",
    ],
  },
  russian: {
    hospital: "Больница Флиман",
    ward: "Отделение Эй 2-й этаж",
    days: [
      "Воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  },
};

// Configuration constants
const HOSPITAL_DISPLAY_INTERVAL = 5; // minutes
const HOSPITAL_DISPLAY_DURATION = 30000; // milliseconds
const REFRESH_RATE = 1000; // milliseconds

function clock() {
  const dt = new Date();

  const hours = `0${dt.getHours()}`.slice(-2);
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();

  var dateString = day + "/" + month + "/" + dt.getFullYear();
  var hoursString = hours + ":" + minutes;

  document.getElementById("hdow").innerHTML =
    " יום " + translations.hebrew.days[dt.getDay()];
  document.getElementById("adow").innerHTML =
    translations.arabic.days[dt.getDay()];
  document.getElementById("rdow").innerHTML =
    translations.russian.days[dt.getDay()];
  document.getElementById("dt").innerHTML = dateString;
  document.getElementById("hr").innerHTML = hoursString;

  // Update hospital text elements
  document.getElementById("hospitalHebrew").innerHTML =
    translations.hebrew.hospital;
  document.getElementById("hospitalArabic").innerHTML =
    translations.arabic.hospital;
  document.getElementById("hospitalRussian").innerHTML =
    translations.russian.hospital;
  document.getElementById("wardHebrew").innerHTML = translations.hebrew.ward;
  document.getElementById("wardArabic").innerHTML = translations.arabic.ward;
  document.getElementById("wardRussian").innerHTML = translations.russian.ward;

  // Check if we should show hospital info
  if (minutes % HOSPITAL_DISPLAY_INTERVAL === 0 && seconds === 0) {
    document.getElementById("timeDisplay").style.display = "none";
    document.getElementById("hospitalDisplay").style.display = "block";
    // Show hospital info for 30 seconds
    setTimeout(() => {
      document.getElementById("timeDisplay").style.display = "block";
      document.getElementById("hospitalDisplay").style.display = "none";
    }, HOSPITAL_DISPLAY_DURATION);
  }

  setTimeout(clock, REFRESH_RATE);
}

// Start the clock
clock();
