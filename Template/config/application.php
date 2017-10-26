<fieldset>
    <legend><?= t('Pomodoro') ?></legend>
    <?= $this->form->label(t('Start Time'), 'pomodoro_initial_time') ?>
    <?= $this->form->text('pomodoro_initial_time', $values, $errors, array('placeholder="12:34"')) ?>
    <p class="form-help"><?= t('Set a start time, like 13:50') ?></p>
    <?= $this->form->label(t('Work Interval'), 'pomodoro_work_interval') ?>
    <?= $this->form->number('pomodoro_work_interval', $values, $errors) ?>
    <p class="form-help"><?= t('The amount of minutes for the work interval') ?></p>
    <?= $this->form->label(t('Break Interval'), 'pomodoro_break_interval') ?>
    <?= $this->form->number('pomodoro_break_interval', $values, $errors) ?>
    <p class="form-help"><?= t('The amount of minutes for the break interval') ?></p>
</fieldset>