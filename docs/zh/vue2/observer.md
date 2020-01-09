# vue2的响应式系统

       vue2的响应式系统基于观察者模式实现，是一种变体。核心概念：observer、dep、watcher。
       基本原理：对一个对象的属性进行getter/setter改造，通过getter收集依赖deps，当属性值变化触发setter，setter通知依赖deps，deps触发观察者，观察者响应的触发对应回调函数。

## Observer

    负责对被观察对象进行改造，增加getter/setter流程。getter负责收集依赖。

## 依赖Dep

    dep依赖，负责通知订阅者。

## 观察者Watcher

    观察者负责触发getter，收集和管理依赖。当主题改变，则触发对应回调函数进行响应。