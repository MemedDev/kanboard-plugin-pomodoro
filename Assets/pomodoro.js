KB.component('pomodoro-widget', function (containerElement, options) {
    let $el = null;

    function notify(message, icon) {
        let notification;

        if (!('Notification' in window)) {
            return;
        }

        if (Notification.permission === 'granted') {
            return new Notification('Pomodoro', {
                body: message,
                icon: icon,
            });
        }
    }

    this.render = function () {
        let initialHour;
        let initialMinute;
        let initialMinutes;
        let intervalBreak;
        let intervalWork;
        let intervalsSum;

        if (! options.initial_time || ! options.work_interval || ! options.break_interval) {
            return;
        }

        if (Notification.permission !== 'denied') {
            Notification.requestPermission();
        }

        initialHour = parseInt(options.initial_time.split(':')[0]);
        initialMinute = parseInt(options.initial_time.split(':')[1]);
        initialMinutes = (initialHour * 60) + initialMinute;

        intervalBreak = parseInt(options.break_interval);
        intervalWork = parseInt(options.work_interval);
        intervalsSum = intervalWork + intervalBreak;

        $('.board-selector-container').after('<div class="pomodoro-widget-timer"></div>');

        $el = $('.pomodoro-widget-timer');

        setInterval(function pomodoroTimerInterval() {
            let now = new Date();
            let seconds = 59 - now.getSeconds();
            let minutes = (now.getHours() * 60) + now.getMinutes();
            let currentMinutes = (minutes + initialMinutes + 1440) % intervalsSum;
            let remainingMinutes;
            let icon = '<i class="fa fa-laptop fa-fw" aria-hidden="true"></i>';

            if (currentMinutes === 0 && seconds === 59) {
                notify('Work time', 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/128/laptop.png');
            }

            if (currentMinutes === intervalWork && seconds === 59) {
                notify('Break time', 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/128/coffee.png');
            }

            if (currentMinutes >= intervalWork) {
                remainingMinutes = intervalBreak - (currentMinutes - intervalWork);
                icon = '<i class="fa fa-coffee fa-fw" aria-hidden="true"></i>';
            } else {
                remainingMinutes = intervalWork - currentMinutes;
            }

            remainingMinutes--;

            remainingMinutes = remainingMinutes >= 10 ? remainingMinutes : '0' + remainingMinutes;
            seconds = seconds >= 10 ? seconds : '0' + seconds;

            $el.html(icon + remainingMinutes + ':' + seconds);
        }, 1000);
    };
});
