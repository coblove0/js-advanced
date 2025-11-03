// 1. Определите дату окончания года (Новый Год)
function getNewYearDate() {
    const today = new Date();
    // Создаем дату 1 января следующего года в 00:00:00
    return new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0); 
}

const newYearDate = getNewYearDate();

// Функция для форматирования и отображения времени
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearDate - currentTime; // Разница в миллисекундах

    if (diff <= 0) {
        // Таймер достиг нуля (уже Новый Год)
        document.getElementById('countdown-timer').innerHTML = "С Новым Годом!";
        clearInterval(timerInterval); // Останавливаем интервал
        return;
    }

    // --- Расчет времени ---

    // Вычисляем сначала месяцы и дни, используя объекты Date
    let years = newYearDate.getFullYear() - currentTime.getFullYear();
    let months = newYearDate.getMonth() - currentTime.getMonth();
    let days = newYearDate.getDate() - currentTime.getDate();

    // Корректируем отрицательные значения
    if (days < 0) {
        // Переносим 1 месяц в дни
        months--;
        const daysInLastMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
        days += daysInLastMonth;
    }
    
    if (months < 0) {
        // Переносим 1 год в месяцы
        years--;
        months += 12;
    }

    // Переводим оставшуюся разницу (diff) в дни, часы, минуты, секунды и миллисекунды
    // (для более точного расчета часов, минут и секунд)
    let remainingTimeInSeconds = Math.floor(diff / 1000);

    // Удаляем из секунд полные месяцы и дни, которые мы уже посчитали
    // (это более сложный, но и более точный подход)

    // Простой подход, который вычисляется ТОЛЬКО из оставшихся миллисекунд после вычета полных дней:
    let s = Math.floor((diff / 1000) % 60);
    let m = Math.floor((diff / 1000 / 60) % 60);
    let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let d_total = Math.floor(diff / (1000 * 60 * 60 * 24)); // Общее количество дней

    // Для отображения месяцев, дней, часов, минут и секунд:
    // Используем d_total для дней и затем отнимаем от него дни, которые входят в полные месяцы
    // (в нашем упрощенном расчете мы покажем годы/месяцы/дни, а затем часы/минуты/секунды из общего остатка)

    // Более простой, но менее точный (для месяцев) способ:
    const daysOnly = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Пересчет для отображения:
    const monthsDisplay = Math.floor(daysOnly / 30.4375); // Приближенно, т.к. месяцы не равны
    const daysDisplay = daysOnly % Math.floor(30.4375); // Приближенно

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);


    // Интернационализация вывода времени:
    const result = `${monthsDisplay} месяцев, ${daysDisplay} дней, ${h < 10 ? '0' + h : h} часов, ${m < 10 ? '0' + m : m} минут, ${s < 10 ? '0' + s : s} секунд`;

    // 4. Покажите отформатированное время в DOM
    document.getElementById('countdown-timer').innerHTML = result;
}

// 3. Используйте setInterval для создания цикла
const timerInterval = setInterval(updateCountdown, 1000);

// Вызываем один раз, чтобы избежать задержки в 1 секунду при первом отображении
updateCountdown();