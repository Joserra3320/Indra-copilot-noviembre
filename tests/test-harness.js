(() => {
  const NativeDate = window.Date;
  let currentTime = new NativeDate(2024, 0, 1, 3, 4, 5).getTime();
  let clockInterval;
  let clockIntervalDelay;

  window.Date = class extends NativeDate {
    constructor(...args) {
      if (args.length === 0) {
        super(currentTime);
      } else {
        super(...args);
      }
    }
  };

  class FakeElement {
    constructor() {
      this.listeners = {};
      this.attributes = {};
      this.children = new Map();
      this.style = {
        values: {},
        setProperty(name, value) {
          this.values[name] = value;
        }
      };
    }

    addEventListener(eventName, callback) {
      this.listeners[eventName] = callback;
    }

    click() {
      if (this.listeners.click) {
        this.listeners.click();
      }
    }

    querySelector(selector) {
      return this.children.get(selector);
    }

    setAttribute(name, value) {
      this.attributes[name] = value;
    }

    getAttribute(name) {
      return this.attributes[name];
    }
  }

  const elements = new Map([
    ["#idea-text", new FakeElement()],
    ["#new-idea", new FakeElement()],
    ["#analog-clock", new FakeElement()],
    ["#hour-hand", new FakeElement()],
    ["#minute-hand", new FakeElement()],
    ["#second-hand", new FakeElement()],
    ["#theme-toggle", new FakeElement()]
  ]);
  const themeToggle = elements.get("#theme-toggle");
  themeToggle.children.set(".theme-icon", new FakeElement());
  themeToggle.children.set(".theme-label", new FakeElement());

  const nativeQuerySelector = document.querySelector.bind(document);
  document.querySelector = (selector) => elements.get(selector) || nativeQuerySelector(selector);
  document.body.dataset.theme = "light";

  window.setInterval = (callback, delay) => {
    clockInterval = callback;
    clockIntervalDelay = delay;
    return 1;
  };

  window.testSupport = {
    elements,
    setTime(...args) {
      currentTime = new NativeDate(...args).getTime();
    },
    getClockInterval() {
      return clockInterval;
    },
    getClockIntervalDelay() {
      return clockIntervalDelay;
    }
  };
})();