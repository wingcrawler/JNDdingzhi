// 自定义事件
class Event {
  constructor() { // 构造函数 constructor 是用于创建和初始化类中创建的一个对象的一种特殊方法
                  // 在一个类中只能有一个名为 “constructor” 的特殊方法
    this.events = {}
  }

  // 监听事件
  on(type, listener) {
    let listeners = this.events[type]

    if (!listeners) {
      listeners = []
      this.events[type] = listeners
    }
    if (listeners.indexOf(listener) === -1) {
      listeners.push(listener)
    }
  }

  // 注销事件
  off(type, listener) {
    let listeners = this.events[type]

    if (listeners) {
      listeners = listeners.filter(item => item !== listener)

      if (listeners.length) {
          delete this.events[type]
      } else {
          this.events[type] = listeners
      }
    }
  }

  // 监听一次性事件
  once(type, listener) {
    let proxy = (...args) => {
      listener(...args)

      this.off(type, listener)
    }

    this.on(type, proxy)
  }

  // 触发事件
  trigger(type, ...args) {
    let listeners = this.events[type]

    if (listeners) {
      listeners.map(listener => listener(...args))
    }
  }
}

export default new Event()
