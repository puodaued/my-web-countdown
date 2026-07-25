// วันสิ้นสุด: 15 มีนาคม 2027 เวลา 00:00 น. ตามเวลาไทย (UTC+7)
const TARGET_DATE = new Date("2027-03-15T00:00:00+07:00");

// ใช้วันที่เริ่มต้นนี้เพื่อคำนวณแถบความคืบหน้า
const START_DATE = new Date("2026-07-25T00:00:00+07:00");

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  progressBar: document.getElementById("progress-bar"),
  progressText: document.getElementById("progress-text"),
  finishedMessage: document.getElementById("finished-message"),
};

function pad(value, length = 2) {
  return String(value).padStart(length, "0");
}

function updateCountdown() {
  const now = new Date();
  const remaining = TARGET_DATE.getTime() - now.getTime();

  if (remaining <= 0) {
    elements.days.textContent = "000";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    elements.progressBar.style.width = "100%";
    elements.progressText.textContent = "การเดินทางนี้ครบ 100% แล้ว";
    elements.finishedMessage.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elements.days.textContent = pad(days, 3);
  elements.hours.textContent = pad(hours);
  elements.minutes.textContent = pad(minutes);
  elements.seconds.textContent = pad(seconds);

  const totalDuration = TARGET_DATE.getTime() - START_DATE.getTime();
  const elapsed = now.getTime() - START_DATE.getTime();
  const progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  elements.progressBar.style.width = `${progress.toFixed(3)}%`;
  elements.progressText.textContent = `ผ่านไปแล้ว ${progress.toFixed(1)}% ของช่วงเวลานับถอยหลัง`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
