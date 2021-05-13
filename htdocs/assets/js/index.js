window.onload = function () {

  const timerSetCounter1 = new TimerSetCounter();
  const options = {
    max_count: 10,
    count_separate: 1000,
    finish_method: function () {
      console.log('終了');
    },
  };
  timerSetCounter1.countTimerSet('timer_count_set1', options);

};