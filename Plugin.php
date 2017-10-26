<?php

namespace Kanboard\Plugin\Pomodoro;

use Kanboard\Core\Plugin\Base;
use Kanboard\Core\Translator;

class Plugin extends Base
{
    public function initialize()
    {
        $this->hook->on('template:layout:js', array('template' => 'plugins/Pomodoro/Assets/pomodoro.js'));
        $this->hook->on('template:layout:css', array('template' => 'plugins/Pomodoro/Assets/pomodoro.css'));
        $this->helper->hook->attach('template:config:application', 'Pomodoro:config/application');
        $this->helper->hook->attach('template:layout:top', 'Pomodoro:header/timer');
    }

    public function onStartup()
    {
        Translator::load($this->languageModel->getCurrentLanguage(), __DIR__.'/Locale');
    }

    public function getClasses()
    {
        return array();
    }

    public function getPluginName()
    {
        return 'Pomodoro';
    }

    public function getPluginDescription()
    {
        return t('Pomodoro Timer for Kanboard.');
    }

    public function getPluginAuthor()
    {
        return 'Memed SA';
    }

    public function getPluginVersion()
    {
        return '1.0.0';
    }

    public function getPluginHomepage()
    {
        return 'https://kanboard.net/plugin/pomodoro';
    }

    public function getCompatibleVersion()
    {
        return '>=1.0.40';
    }
}
