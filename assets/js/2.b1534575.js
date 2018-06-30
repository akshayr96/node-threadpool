(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{54:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Usage")]),s("p",[t._v("To submit work to a thread pool, create a method which returns a promise.")]),s("p",[t._v("In this example, the method is declared inline and returns a "),s("code",[t._v("Promise<string>")]),t._v(".")]),s("p",[t._v("After completion of work, the thread pool resolves the promise with the value.")]),s("p",[t._v("We use "),s("code",[t._v("await")]),t._v(" to wait until the result is available then print it to "),s("code",[t._v("console.log")]),t._v(".")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Executors"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// prints "hello world"')]),t._v("\n")])])]),s("h2",{attrs:{id:"passing-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#passing-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Passing Data")]),s("p",[t._v("Thread pool functions cannot access data outside of the function's context. This is because the worker runs in a separate thread and cannot access data in the main thread.")]),s("p",[t._v("The easiest way to get data into the worker thread is to copy it. This can be done by providing "),s("code",[t._v("submit")]),t._v(" two arguments (the first is the runnable function, the second is the data to copy).")]),s("p",[t._v("Most standard data is supported. Class instances and data with circular references notably are not supported.")]),s("p",[t._v("Note that each worker receives a "),s("em",[t._v("copy")]),t._v(" of the data -- changes made within each thread do not affect the original data.")]),s("p",[t._v("In the following example, a Map is copied into the worker thread for data access.")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Executors"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newSingleThreadedExecutor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"key"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"value"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  map\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" d"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"key"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// prints "value"')]),t._v("\n")])])]),s("h2",{attrs:{id:"shared-array-buffers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shared-array-buffers","aria-hidden":"true"}},[t._v("#")]),t._v(" Shared Array Buffers")]),s("p",[t._v("Node's "),s("code",[t._v("worker_thread")]),t._v(" API supports shared memory between threads. Unlike copying data directly to each worker, shared memory avoids the copy overhead and allows threads to communicate to each other by reading and writing to the same area of memory.")]),s("p",[s("code",[t._v("node-threadpool")]),t._v(" supports shared memory -- if you pass data of type\n"),s("code",[t._v("SharedArrayBuffer")]),t._v(" in the "),s("code",[t._v("submit")]),t._v(" function, it will automatically be accessible from each thread.")]),s("p",[t._v("In the following example, a shared buffer is created to hold a single integer. This integer is then written to in the first thread, and read and returned in the second thead. Note that we could also read and write to the same buffer from the main thread.")]),s("p",[t._v("Also note that a single thread executor is used to avoid concurrent threads reading and writing to the same memory at the same time (see the next example using Atomics which does this safely).")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buffer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SharedArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" Int32Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("BYTES_PER_ELEMENT")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sharedBuffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// provide a view onto the buffer")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// theres no lock, so in order to write safely we'll use one thread for this toy example")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// see the next example for atomic usage")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Executors"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newSingleThreadedExecutor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// set the data in the shared buffer to 42")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" pool"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("42")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// read the data from the shared buffer")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// prints 42")]),t._v("\n")])])]),s("h2",{attrs:{id:"atomics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atomics","aria-hidden":"true"}},[t._v("#")]),t._v(" Atomics")]),s("p",[t._v("For threads to access and write to the same elements in "),s("code",[t._v("SharedArrayBuffers")]),t._v(", Atomic operations are needed (ex. to implment locks and mutexes). In this example, the same area of memory is accessed in the main thread and the worker thread.")]),s("p",[t._v("The worker thread waits until the memory has been changed (by the main thread's "),s("code",[t._v("Atomics.store")]),t._v("), then continues with its operation.")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buffer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SharedArrayBuffer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" Int32Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("BYTES_PER_ELEMENT")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pool "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Executors"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newSingleThreadedExecutor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("submit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" view "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Atomics"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("wait")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// wait here until the value is no longer 0")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Atomics"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("load")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buffer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nAtomics"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("store")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// change the value from 0, unblocking the worker thread")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// prints 1")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);