!(function () {
  var e = {
      757: function (e, t, n) {
        e.exports = n(666);
      },
      666: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function s(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            s({}, "");
          } catch (e) {
            s = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
              i = Object.create(o.prototype),
              a = new O(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = f;
                return function (o, i) {
                  if (r === h) throw new Error("Generator is already running");
                  if (r === d) {
                    if ("throw" === o) throw i;
                    return T();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var c = S(a, n);
                      if (c) {
                        if (c === v) continue;
                        return c;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = d), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = h;
                    var s = l(e, t, n);
                    if ("normal" === s.type) {
                      if (((r = n.done ? d : p), s.arg === v)) continue;
                      return { value: s.arg, done: n.done };
                    }
                    "throw" === s.type &&
                      ((r = d), (n.method = "throw"), (n.arg = s.arg));
                  }
                };
              })(e, n, a)),
              i
            );
          }
          function l(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = u;
          var f = "suspendedStart",
            p = "suspendedYield",
            h = "executing",
            d = "completed",
            v = {};
          function g() {}
          function y() {}
          function m() {}
          var _ = {};
          _[i] = function () {
            return this;
          };
          var b = Object.getPrototypeOf,
            k = b && b(b(P([])));
          k && k !== n && r.call(k, i) && (_ = k);
          var w = (m.prototype = g.prototype = Object.create(_));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              s(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function L(e, t) {
            function n(o, i, a, c) {
              var s = l(e[o], e, i);
              if ("throw" !== s.type) {
                var u = s.arg,
                  f = u.value;
                return f && "object" == typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, a, c);
                      },
                      function (e) {
                        n("throw", e, a, c);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (u.value = e), a(u);
                      },
                      function (e) {
                        return n("throw", e, a, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            this._invoke = function (e, r) {
              function i() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function S(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  S(e, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var o = l(r, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function E(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function j(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(E, this),
              this.reset(!0);
          }
          function P(e) {
            if (e) {
              var n = e[i];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  a = function n() {
                    for (; ++o < e.length; )
                      if (r.call(e, o))
                        return (n.value = e[o]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: T };
          }
          function T() {
            return { value: t, done: !0 };
          }
          return (
            (y.prototype = w.constructor = m),
            (m.constructor = y),
            (y.displayName = s(m, c, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === y || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), s(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(w)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(L.prototype),
            (L.prototype[a] = function () {
              return this;
            }),
            (e.AsyncIterator = L),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new L(u(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            x(w),
            s(w, c, "Generator"),
            (w[i] = function () {
              return this;
            }),
            (w.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = P),
            (O.prototype = {
              constructor: O,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(j),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function o(r, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var s = r.call(a, "catchLoc"),
                      u = r.call(a, "finallyLoc");
                    if (s && u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), j(n), v;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      j(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: P(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(t);
        }
      },
      78: function (e, t, n) {
        "use strict";
        e.exports = n.p + "img/icons.svg";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    (function () {
      "use strict";
      function e(e, t, n, r, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function t(t) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(n, r);
            function c(t) {
              e(a, o, i, c, s, "next", t);
            }
            function s(t) {
              e(a, o, i, c, s, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var r = n(757),
        o = n.n(r),
        i = 10,
        a = {
          bookmark: [],
          search: {
            searchdata: null,
            searchresult: null,
            currentpage: 1,
            totalpagenumber: null,
          },
        };
      function c() {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = t(
          o().mark(function e() {
            var t, n, r, i;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = window.location.hash.slice(1)),
                        (n = a.bookmark.find(function (e) {
                          return e.id == t;
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        fetch(
                          "https://forkify-api.herokuapp.com/api/v2/recipes/".concat(
                            t
                          )
                        )
                      );
                    case 5:
                      return (r = e.sent), (e.next = 8), r.json();
                    case 8:
                      (i = e.sent),
                        (a.recipe = i.data.recipe),
                        console.log(i),
                        (a.recipe.bookmarked = !!n),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14), (e.t0 = e.catch(2)), console.log(e.t0);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 14]]
            );
          })
        )).apply(this, arguments);
      }
      function u(e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = t(
          o().mark(function e(t) {
            var n, r, c, s;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        fetch(
                          "https://forkify-api.herokuapp.com/api/v2/recipes?search=".concat(
                            t,
                            "&key=148bf198-1e6b-4e88-b41d-5253dc0447c0"
                          )
                        )
                      );
                    case 3:
                      return (n = e.sent), (e.next = 6), n.json();
                    case 6:
                      if (
                        ((r = e.sent),
                        console.log(n),
                        console.log(r),
                        r.results && 0 != r.results)
                      ) {
                        e.next = 11;
                        break;
                      }
                      throw new Error("No data found");
                    case 11:
                      (a.search.searchdata = r.data.recipes),
                        (a.search.searchresult = a.search.searchdata.slice(
                          0,
                          i
                        )),
                        (c = a.search.searchdata.length),
                        (s = Math.ceil(c / i)),
                        (a.search.totalpagenumber = s),
                        (e.next = 21);
                      break;
                    case 18:
                      throw ((e.prev = 18), (e.t0 = e.catch(0)), e.t0);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 18]]
            );
          })
        )).apply(this, arguments);
      }
      function f(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = t(
          o().mark(function e(t) {
            var n, r, i;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = {
                          cooking_time: t.cookingTime,
                          image_url: t.image,
                          ingredients: t.ingredients,
                          publisher: t.publisher,
                          servings: t.servings,
                          source_url: t.sourceUrl,
                          title: t.title,
                        }),
                        (e.next = 4),
                        fetch(
                          "https://forkify-api.herokuapp.com/api/v2/recipes?key=148bf198-1e6b-4e88-b41d-5253dc0447c0",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(n),
                          }
                        )
                      );
                    case 4:
                      return (r = e.sent), (e.next = 7), r.json();
                    case 7:
                      if ("fail" !== (i = e.sent).status) {
                        e.next = 10;
                        break;
                      }
                      throw new Error(i.message);
                    case 10:
                      e.next = 15;
                      break;
                    case 12:
                      throw ((e.prev = 12), (e.t0 = e.catch(0)), e.t0);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 12]]
            );
          })
        )).apply(this, arguments);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t, n) {
        return t && d(e.prototype, t), n && d(e, n), e;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && y(e, t);
      }
      function _(e) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function b(e, t) {
        return !t || ("object" !== _(t) && "function" != typeof t) ? g(e) : t;
      }
      function k(e) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var x = n(78),
        L = (function () {
          function e() {
            h(this, e);
          }
          return (
            v(e, [
              {
                key: "handleMessage",
                value: function (e) {
                  this._parentdom.innerHTML =
                    '<div class="error">\n    <div>\n      <svg>\n        <use href="'
                      .concat(
                        x,
                        '#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>'
                      )
                      .concat(e, "</p>\n  </div>");
                },
              },
              {
                key: "handleLoader",
                value: function () {
                  return (this._parentdom.innerHTML =
                    '<div class="spinner">\n        <svg>\n          <use href="'.concat(
                      x,
                      '#icon-loader"></use>\n        </svg>\n      </div>'
                    ));
                },
              },
            ]),
            e
          );
        })();
      var S = new ((function (e) {
        m(o, e);
        var t,
          n,
          r =
            ((t = o),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = k(t);
              if (n) {
                var o = k(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return b(this, e);
            });
        function o() {
          var e;
          return (
            h(this, o),
            w(g((e = r.call(this))), "_data", null),
            w(g(e), "_parentdom", document.querySelector(".recipe")),
            w(g(e), "_bookmarkbtn", document.querySelector(".btn--round")),
            e
          );
        }
        return (
          v(o, [
            {
              key: "render",
              value: function (e) {
                (this._data = e),
                  (this._parentdom.innerHTML = ""),
                  this._parentdom.insertAdjacentHTML(
                    "afterbegin",
                    this.generateHtml()
                  );
              },
            },
            {
              key: "generateHtml",
              value: function () {
                return '<figure class="recipe__fig">\n    <img src="'
                  .concat(
                    this._data.image_url,
                    '" alt="Tomato" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>'
                  )
                  .concat(
                    this._data.title,
                    '</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="icons#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">'
                  )
                  .concat(
                    this._data.cooking_time,
                    '</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="'
                  )
                  .concat(
                    x,
                    '#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">'
                  )
                  .concat(
                    this._data.servings,
                    '</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="'
                  )
                  .concat(
                    x,
                    '#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="'
                  )
                  .concat(
                    x,
                    '#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated">\n      <svg>\n        <use href="'
                  )
                  .concat(
                    x,
                    '#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round">\n      <svg class="">\n        <use href="'
                  )
                  .concat(x, "#icon-bookmark")
                  .concat(
                    this._data.bookmarked ? "-fill" : "",
                    '"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n    '
                  )
                  .concat(
                    this._data.ingredients
                      .map(function (e) {
                        return ' <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n            <use href="'
                          .concat(
                            x,
                            '#icon-check"></use>\n          </svg>\n          <div class="recipe__quantity">'
                          )
                          .concat(
                            e.quantity,
                            '</div>\n          <div class="recipe__description">\n            <span class="recipe__unit">'
                          )
                          .concat(e.unit, "</span>")
                          .concat(
                            e.description,
                            "\n          </div>\n        </li>"
                          );
                      })
                      .join(""),
                    ' \n   \n   </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">The Pioneer Woman</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="'
                  )
                  .concat(
                    x,
                    '#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>'
                  );
              },
            },
            {
              key: "handleChange",
              value: function (e) {
                window.addEventListener("hashchange", function () {
                  e();
                });
              },
            },
            {
              key: "handleBookmarked",
              value: function (e) {
                this._parentdom.addEventListener("click", function (t) {
                  t.target.closest(".btn--round") && e();
                });
              },
            },
          ]),
          o
        );
      })(L))();
      var E = new ((function (e) {
        m(o, e);
        var t,
          n,
          r =
            ((t = o),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = k(t);
              if (n) {
                var o = k(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return b(this, e);
            });
        function o() {
          var e;
          return (
            h(this, o),
            w(g((e = r.call(this))), "_data", null),
            w(g(e), "_searchform", document.querySelector(".search__field")),
            w(g(e), "_searchbtn", document.querySelector(".search__btn")),
            w(g(e), "_parentdom", document.querySelector(".results")),
            e
          );
        }
        return (
          v(o, [
            {
              key: "render",
              value: function (e) {
                (this._data = e),
                  (this._parentdom.innerHTML = ""),
                  this._parentdom.insertAdjacentHTML(
                    "afterBegin",
                    this.generateHtml()
                  );
              },
            },
            {
              key: "generateHtml",
              value: function () {
                return this._data
                  .map(function (e) {
                    return '<li class="preview">\n        <a class="preview__link preview__link--active" href="#'
                      .concat(
                        e.id,
                        '">\n          <figure class="preview__fig">\n            <img src="'
                      )
                      .concat(
                        e.image_url,
                        '" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">'
                      )
                      .concat(
                        e.title,
                        '</h4>\n            <p class="preview__publisher">'
                      )
                      .concat(
                        e.publisher,
                        '</p>\n            <div class="preview__user-generated">\n              <svg>\n                <use href="'
                      )
                      .concat(
                        x,
                        '#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>'
                      );
                  })
                  .join("");
              },
            },
            {
              key: "handleSearch",
              value: function (e) {
                var t = this;
                this._searchbtn.addEventListener("click", function (n) {
                  n.preventDefault();
                  var r = t._searchform.value;
                  e(r);
                });
              },
            },
          ]),
          o
        );
      })(L))();
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var O = new ((function () {
          function e() {
            h(this, e),
              w(this, "_overlay", document.querySelector(".overlay")),
              w(
                this,
                "_addrecipewindow",
                document.querySelector(".add-recipe-window")
              ),
              w(
                this,
                "_addrecipe",
                document.querySelector(".nav__btn--add-recipe")
              ),
              w(this, "_closebtn", document.querySelector(".btn--close-modal")),
              w(this, "_addrecipeform", document.querySelector(".upload")),
              this.showhidepoopup();
          }
          return (
            v(e, [
              {
                key: "showhidepoopup",
                value: function () {
                  var e = this;
                  this._addrecipe.addEventListener("click", function () {
                    e._overlay.classList.toggle("hidden"),
                      e._addrecipewindow.classList.toggle("hidden");
                  }),
                    this._closebtn.addEventListener("click", function () {
                      e._overlay.classList.toggle("hidden"),
                        e._addrecipewindow.classList.toggle("hidden");
                    });
                },
              },
              {
                key: "handleAddRecipe",
                value: function (e) {
                  this._addrecipeform.addEventListener("submit", function (t) {
                    t.preventDefault();
                    var n,
                      r =
                        (function (e) {
                          if (Array.isArray(e)) return j(e);
                        })((n = new FormData(t.target))) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(n) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return j(e, t);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? j(e, t)
                                : void 0
                            );
                          }
                        })(n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })(),
                      o = r.filter(function (e) {
                        return !e[0].startsWith("ingredient");
                      }),
                      i = r
                        .filter(function (e) {
                          return e[0].startsWith("ingredient") && "" !== e[1];
                        })
                        .map(function (e) {
                          var t = e[1].split(",");
                          return {
                            quantity: t[0],
                            unit: t[1],
                            description: t[2],
                          };
                        }),
                      a = Object.fromEntries(o);
                    (a.ingredients = i), e(a);
                  });
                },
              },
            ]),
            e
          );
        })())(),
        P = new ((function () {
          function e() {
            h(this, e),
              w(this, "_data", null),
              w(
                this,
                "_bookmarkdom",
                document.querySelector(".bookmarks__list")
              );
          }
          return (
            v(e, [
              {
                key: "render",
                value: function (e) {
                  (this._data = e),
                    (this._bookmarkdom.innerHTML = ""),
                    this._bookmarkdom.insertAdjacentHTML(
                      "afterBegin",
                      this.generateHtml()
                    );
                },
              },
              {
                key: "generateHtml",
                value: function () {
                  return this._data
                    .map(function (e) {
                      return '<li class="preview">\n      <a class="preview__link preview__link--active" href="#'
                        .concat(
                          e.id,
                          '">\n        <figure class="preview__fig">\n          <img src="'
                        )
                        .concat(
                          e.image_url,
                          '" alt="Test" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">'
                        )
                        .concat(
                          e.title,
                          '</h4>\n          <p class="preview__publisher">'
                        )
                        .concat(
                          e.publisher,
                          '</p>\n          <div class="preview__user-generated">\n            <svg>\n              <use href="'
                        )
                        .concat(
                          x,
                          '#icon-user"></use>\n            </svg>\n          </div>\n        </div>\n      </a>\n    </li>'
                        );
                    })
                    .join("");
                },
              },
            ]),
            e
          );
        })())(),
        T = new ((function () {
          function e() {
            h(this, e),
              w(this, "_parentdom", document.querySelector(".pagination"));
          }
          return (
            v(e, [
              {
                key: "render",
                value: function (e, t) {
                  (this._parentdom.innerHTML = ""),
                    this._parentdom.insertAdjacentHTML(
                      "afterBegin",
                      this.generateHtml(e, t)
                    );
                },
              },
              {
                key: "handlePagination",
                value: function (e) {
                  this._parentdom.addEventListener("click", function (t) {
                    if ((console.log("outside"), t.target.closest("button"))) {
                      var n = t.target.closest("button").dataset.page;
                      console.log(n), e(n);
                    }
                  });
                },
              },
              {
                key: "generateHtml",
                value: function (e, t) {
                  return (
                    (t = +t),
                    1 == (e = +e)
                      ? ' <button class="btn--inline pagination__btn--next" data-page="'
                          .concat(e + 1, '">\n      <span>Page ')
                          .concat(
                            e + 1,
                            '</span>\n      <svg class="search__icon">\n        <use href="'
                          )
                          .concat(
                            x,
                            '#icon-arrow-right"></use>\n      </svg>\n    </button>'
                          )
                      : e == t
                      ? '<button class="btn--inline pagination__btn--prev" data-page="'
                          .concat(
                            e - 1,
                            '">\n    <svg class="search__icon">\n      <use href="'
                          )
                          .concat(
                            x,
                            '#icon-arrow-left"></use>\n    </svg>\n    <span>Page '
                          )
                          .concat(e - 1, "</span>\n  </button>")
                      : e > 1 && e < t
                      ? ' <button class="btn--inline pagination__btn--next" data-page="'
                          .concat(e + 1, '">\n      <span>Page ')
                          .concat(
                            e + 1,
                            '</span>\n      <svg class="search__icon">\n        <use href="'
                          )
                          .concat(
                            x,
                            '#icon-arrow-right"></use>\n      </svg>\n    </button>\n    <button class="btn--inline pagination__btn--prev" data-page="'
                          )
                          .concat(
                            e - 1,
                            '">\n    <svg class="search__icon">\n      <use href="'
                          )
                          .concat(
                            x,
                            '#icon-arrow-left"></use>\n    </svg>\n    <span>Page '
                          )
                          .concat(e - 1, "</span>\n  </button>")
                      : void 0
                  );
                },
              },
            ]),
            e
          );
        })())();
      function H() {
        return (H = t(
          o().mark(function e() {
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return S.handleLoader(), (e.next = 3), c();
                  case 3:
                    S.render(a.recipe);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function R() {
        return (R = t(
          o().mark(function e(t) {
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), E.handleLoader(), (e.next = 4), u(t);
                    case 4:
                      E.render(a.search.searchresult),
                        T.render(
                          a.search.currentpage,
                          a.search.totalpagenumber
                        ),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        E.handleMessage(e.t0.message);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function q() {
        return (q = t(
          o().mark(function e(t) {
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), f(t);
                    case 3:
                      console.log("success"), (e.next = 9);
                      break;
                    case 6:
                      (e.prev = 6),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0.message);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]]
            );
          })
        )).apply(this, arguments);
      }
      window.addEventListener("load", function () {
        var e;
        (e = JSON.parse(localStorage.getItem("bookmark"))) && (a.bookmark = e),
          a.bookmark.length > 0 && P.render(a.bookmark);
      }),
        S.handleChange(function () {
          return H.apply(this, arguments);
        }),
        E.handleSearch(function (e) {
          return R.apply(this, arguments);
        }),
        O.handleAddRecipe(function (e) {
          return q.apply(this, arguments);
        }),
        S.handleBookmarked(function () {
          0 == a.recipe.bookmarked
            ? ((a.recipe.bookmarked = !0),
              a.bookmark.push(a.recipe),
              localStorage.setItem("bookmark", JSON.stringify(a.bookmark)))
            : ((a.recipe.bookmarked = !1),
              console.log("oldbookmark"),
              console.log(a.bookmark),
              (a.bookmark = a.bookmark.filter(function (e) {
                return e.id !== a.recipe.id;
              })),
              console.log("newbookmark"),
              console.log(a.bookmark),
              localStorage.setItem("bookmark", JSON.stringify(a.bookmark))),
            S.render(a.recipe),
            P.render(a.bookmark);
        }),
        T.handlePagination(function (e) {
          !(function (e) {
            a.search.currentpage = e;
            var t = i * e - i,
              n = t + i;
            console.log(t),
              console.log(n),
              (a.search.searchresult = a.search.searchdata.slice(t, n));
          })(e),
            E.render(a.search.searchresult),
            T.render(a.search.currentpage, a.search.totalpagenumber);
        });
    })();
})();
