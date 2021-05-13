let TimerSetCounter = (function () { });

TimerSetCounter.prototype = {
  getDefaultOptions: function (options) {
    let defaultOptions = {};
    if (options) {
      defaultOptions = options;
    } else {
      defaultOptions = {
        max_count: 100,
        count_separate: 1000,
        finish_method: function () {

        },
      };
    }
    return defaultOptions;
  },
  countTimerSet: function (targetEle, options) {
    this.countTimer(targetEle, options);
  },
  countTimer: function (targetEle, options) {
    const option = this.getDefaultOptions(options);
    const target = document.getElementById(targetEle);
    let max_count = option.max_count;
    let timer_id = 0;
    const countDown = () => {
      timer_id = setTimeout(countDown, option.count_separate);
      if (max_count >= 1) {
        max_count--;
      } else {
        this.countFinished(option);
        clearTimeout(timer_id);
      }

      target.textContent = max_count;

      return max_count;
    }
    current_timer = countDown();
    return current_timer;
  },
  countFinished: function (options) {
    const option = this.getDefaultOptions(options);
    if (option.finish_method) {
      option.finish_method();
    }

  }

};