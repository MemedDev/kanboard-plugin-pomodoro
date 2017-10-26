<?= $this->app->component('pomodoro-widget', array(
    'initial_time'   => $this->app->config('pomodoro_initial_time', null),
    'work_interval'  => $this->app->config('pomodoro_work_interval', null),
    'break_interval' => $this->app->config('pomodoro_break_interval', null)
)) ?>