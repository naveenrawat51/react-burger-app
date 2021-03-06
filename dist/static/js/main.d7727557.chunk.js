(this["webpackJsonpreact-burger-app"] =
  this["webpackJsonpreact-burger-app"] || []).push([
  [0],
  [
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "n", function () {
          return a;
        }),
        n.d(t, "p", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return i;
        }),
        n.d(t, "k", function () {
          return c;
        }),
        n.d(t, "l", function () {
          return u;
        }),
        n.d(t, "j", function () {
          return l;
        }),
        n.d(t, "m", function () {
          return s;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "g", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return b;
        }),
        n.d(t, "o", function () {
          return E;
        });
      var r = "ADD_INGREDIENTS",
        a = "REMOVE_INGREDIENTS",
        o = "SET_INGREDIENTS",
        i = "FETCH_INGREDIENTS_FAILED",
        c = "PURCHASE_BURGER_START",
        u = "PURCHASE_BURGER_SUCCESS",
        l = "PURCHASE_BURGER_FAIL",
        s = "PURCHASE_INIT",
        d = "FETCH_ORDER_START",
        p = "FETCH_ORDERS_SUCCESS",
        m = "FETCH_ORDERS_FAIL",
        h = "AUTH_START",
        f = "AUTH_SUCCESS",
        g = "AUTH_FAIL",
        b = "AUTH_LOGOUT",
        E = "SET_AUTH_REDIRECT_PATH";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        return e.children;
      };
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "i", function () {
          return i;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "g", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "j", function () {
          return E;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n(1),
        a = n(18),
        o = function (e) {
          return { type: r.a, ingredientName: e };
        },
        i = function (e) {
          return { type: r.n, ingredientName: e };
        },
        c = function () {
          return function (e) {
            a.a
              .get("/ingredients.json")
              .then(function (t) {
                return e(((n = t.data), { type: r.p, ingredients: n }));
                var n;
              })
              .catch(function (t) {
                return e({ type: r.f });
              });
          };
        },
        u = n(17),
        l = function (e, t) {
          return function (n) {
            n({ type: r.k }),
              a.a
                .post("/orders.json?auth=" + t, e)
                .then(function (t) {
                  return n(
                    (function (e, t) {
                      return { type: r.l, orderId: e, orderData: t };
                    })(t.data.name, e)
                  );
                })
                .catch(function (e) {
                  return n(
                    (function (e) {
                      return { type: r.j, error: e };
                    })(e)
                  );
                });
          };
        },
        s = function () {
          return { type: r.m };
        },
        d = function (e, t) {
          return function (n) {
            n({ type: r.i });
            var o = "?auth=" + e + '&orderBy="userId"&equalTo="' + t + '"';
            a.a
              .get("/orders.json" + o)
              .then(function (e) {
                var t,
                  a = [];
                for (var o in e.data)
                  a.push(
                    Object(u.a)(Object(u.a)({}, e.data[o]), {}, { id: o })
                  );
                n(((t = a), { type: r.h, ordersData: t }));
              })
              .catch(function (e) {
                return n({ type: r.g, error: t });
                var t;
              });
          };
        },
        p = n(30),
        m = n.n(p),
        h = function (e) {
          return { type: r.e, data: e };
        },
        f = function () {
          return (
            localStorage.removeItem("token"),
            localStorage.removeItem("expirationDate"),
            localStorage.removeItem("userId"),
            { type: r.c }
          );
        },
        g = function (e) {
          return function (t) {
            setTimeout(function () {
              t(f());
            }, 1e3 * e);
          };
        },
        b = function (e, t, n) {
          return function (a) {
            a({ type: r.d });
            var o = { email: e, password: t, returnSecureToken: !0 },
              i =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyhEevyRCrdv2tDqzWEQkCDuqagpAKUvc";
            n ||
              (i =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyhEevyRCrdv2tDqzWEQkCDuqagpAKUvc"),
              m.a
                .post(i, o)
                .then(function (e) {
                  var t = new Date(
                    new Date().getTime() + 1e3 * e.data.expiresIn
                  );
                  localStorage.setItem("token", e.data.idToken),
                    localStorage.setItem("expirationDate", t),
                    localStorage.setItem("userId", e.data.localId),
                    a(h(e.data)),
                    a(g(e.data.expiresIn));
                })
                .catch(function (e) {
                  a(
                    (function (e) {
                      return { type: r.b, error: e };
                    })(e.response.data.error.message)
                  );
                });
          };
        },
        E = function (e) {
          return { type: r.o, path: e };
        },
        v = function () {
          return function (e) {
            var t = localStorage.getItem("token");
            if (t) {
              var n = new Date(localStorage.getItem("expirationDate"));
              if (n <= new Date()) e(f());
              else {
                var r = localStorage.getItem("userId");
                e(h({ idToken: t, localId: r })),
                  e(g((n.getTime() - new Date().getTime()) / 1e3));
              }
            } else e(f());
          };
        };
    },
    function (e, t, n) {
      e.exports = {
        BreadBottom: "pgUasRYgKTdOMBDUTNak0",
        BreadTop: "_1qwk-L-8NpT6Q3lyX9_XXF",
        Seeds1: "_1NoR3Sg7ZkFv26IWaYSeB7",
        Seeds2: "rJjjNXl8KAgomxzUAsNho",
        Meat: "_27By3t6afo9AOFbaZHs-BQ",
        Cheese: "_3Xxg-zMN5HGIkTGGAtS8nI",
        Salad: "PEJF9v7w4x887LIhMkQna",
        Bacon: "_1FuPvnvGSOPSwWWui0bCVS",
      };
    },
    ,
    function (e, t, n) {
      "use strict";
      var r = n(30),
        a = n
          .n(r)
          .a.create({
            baseURL: "https://react-my-burger-8014e.firebaseio.com/",
          });
      t.a = a;
    },
    ,
    function (e, t, n) {
      e.exports = {
        SideDrawer: "_21TuB0Dn6JJ4uEYkpf9Fnt",
        Open: "_1pVYRaiLBtOhv7pDNimBtN",
        Close: "_3Yv1lLM58kyRaR73W22KWZ",
        Logo: "_3TkPvMPv1WUzP1NgAUT6zE",
        mobileOnly: "_3bhqfiUYB1oOzFeJkp2Ojx",
      };
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        BuildControl: "_1jYc3QBtl-VmgIWdCI3dgO",
        Label: "_33Z-plxrqIneM7Mz2ytOp0",
        Less: "_377MJOSYo2UYjMj1U14k03",
        More: "_28-hQFZzubxjJbKbVayD5m",
      };
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n.n(r),
        o = n(57),
        i = n.n(o);
      t.a = function (e) {
        return e.show
          ? a.a.createElement("div", {
              className: i.a.Backdrop,
              onClick: e.clicked,
            })
          : null;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        a = n(5),
        o = n(7),
        i = n(6),
        c = n(0),
        u = n.n(c),
        l = n(60),
        s = n.n(l),
        d = n(10),
        p = n(28),
        m = (function (e) {
          Object(o.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            return Object(r.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    e.show !== this.props.show ||
                    e.children !== this.props.children
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    d.a,
                    null,
                    u.a.createElement(p.a, {
                      show: this.props.show,
                      clicked: this.props.modalClosed,
                    }),
                    u.a.createElement(
                      "div",
                      {
                        className: s.a.Modal,
                        style: {
                          transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                          opacity: this.props.show ? "1" : "0",
                        },
                      },
                      this.props.children
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component);
      t.a = m;
    },
    ,
    function (e, t, n) {
      e.exports = {
        Toolbar: "_2JJW-ZloCsemWXc-SwluYI",
        Logo: "_1efBDQJDXv28ttI2RtLXHD",
        DesktopOnly: "WADUdqFzcPCSrUAJGFXrf",
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n.n(r),
        o = n(39),
        i = n.n(o);
      t.a = function (e) {
        return a.a.createElement(
          "button",
          {
            className: [i.a.Button, i.a[e.btnType]].join(" "),
            disabled: e.disabled,
            onClick: e.clicked,
          },
          e.children
        );
      };
    },
    ,
    function (e, t, n) {
      e.exports = {
        NavigationItem: "_23bcunS9Qq8yRK8U15WWqn",
        active: "_2zJdO1aspVrGyx-JgFjMYX",
      };
    },
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        BuildControls: "_3_01fOopnX44ubS-oaxkTR",
        OrderButton: "myBwTggVYuoTSZ0phsfQj",
        enable: "_3jYIqaQjQmo_d3HEVAUYmZ",
      };
    },
    function (e, t, n) {
      e.exports = {
        Button: "QI7b2B9HFdWRqXJlhx5ZF",
        Success: "_2dHUtYmIiKVpRl3omZjpfb",
        Danger: "_2xnhNuUUklZ_76EhvNOs5Q",
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        a = n.n(r),
        o = n(61),
        i = n.n(o);
      t.a = function () {
        return a.a.createElement(
          "div",
          { className: i.a.loader },
          "Loading..."
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        a = n(5),
        o = n(7),
        i = n(6),
        c = n(0),
        u = n.n(c),
        l = n(29),
        s = n(10);
      t.a = function (e, t) {
        return (function (n) {
          Object(o.a)(d, n);
          var c = Object(i.a)(d);
          function d() {
            var e;
            Object(r.a)(this, d);
            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
              n[a] = arguments[a];
            return (
              ((e = c.call.apply(c, [this].concat(n))).state = { error: null }),
              (e.errorConfirmedHandler = function () {
                e.setState({ error: null });
              }),
              e
            );
          }
          return (
            Object(a.a)(d, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  (this.reqInterceptors = t.interceptors.request.use(function (
                    t
                  ) {
                    return e.setState({ error: null }), t;
                  })),
                    (this.resInterceptors = t.interceptors.response.use(
                      function (e) {
                        return e;
                      },
                      function (t) {
                        e.setState({ error: t });
                      }
                    ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  t.interceptors.request.eject(this.reqInterceptors),
                    t.interceptors.response.eject(this.resInterceptors);
                },
              },
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    s.a,
                    null,
                    u.a.createElement(
                      l.a,
                      {
                        show: this.state.error,
                        modalClosed: this.errorConfirmedHandler,
                      },
                      this.state.error ? this.state.error.message : null,
                      "!!"
                    ),
                    u.a.createElement(e, this.props)
                  );
                },
              },
            ]),
            d
          );
        })(c.Component);
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      var r = n(63),
        a = n(0),
        o = n.n(a),
        i = n(16),
        c = n.n(i),
        u = function (e) {
          var t = null;
          switch (e.type) {
            case "bread-bottom":
              t = o.a.createElement("div", { className: c.a.BreadBottom });
              break;
            case "bread-top":
              t = o.a.createElement(
                "div",
                { className: c.a.BreadTop },
                o.a.createElement("div", { className: c.a.Seeds1 }),
                o.a.createElement("div", { className: c.a.Seeds2 })
              );
              break;
            case "meat":
              t = o.a.createElement("div", { className: c.a.Meat });
              break;
            case "cheese":
              t = o.a.createElement("div", { className: c.a.Cheese });
              break;
            case "bacon":
              t = o.a.createElement("div", { className: c.a.Bacon });
              break;
            case "salad":
              t = o.a.createElement("div", { className: c.a.Salad });
              break;
            default:
              t = null;
          }
          return t;
        },
        l = n(59),
        s = n.n(l);
      t.a = function (e) {
        var t = Object.keys(e.ingredients).map(function (t) {
          return Object(r.a)(Array(e.ingredients[t])).map(function (e, n) {
            return o.a.createElement(u, { key: t + n, type: t });
          });
        });
        return (
          Object.keys(e.ingredients).length > 0 &&
            0 ===
              Object.values(e.ingredients).reduce(function (e, t) {
                return e + t;
              }) &&
            (t = o.a.createElement(
              "p",
              null,
              "Please start adding ingredient!!"
            )),
          o.a.createElement(
            "div",
            { className: s.a.Burger },
            o.a.createElement(u, { type: "bread-top" }),
            t,
            o.a.createElement(u, { type: "bread-bottom" })
          )
        );
      };
    },
    function (e, t, n) {
      e.exports = { Content: "_2fWdXx73utokZkSQg8nql-" };
    },
    function (e, t, n) {
      e.exports = { Logo: "_19WaN2tuJCY7yX7kGD_ZBx" };
    },
    function (e, t, n) {
      e.exports = { NavigationItems: "_yd_dZzBcrRT8NyTlYD_N" };
    },
    function (e, t, n) {
      e.exports = { DrawerToggle: "_26to0rZE2eHfVYZs2qTwFH" };
    },
    function (e, t, n) {
      e.exports = { Backdrop: "efy1yH85jAELhES8l7b-c" };
    },
    ,
    function (e, t, n) {
      e.exports = { Burger: "_3K4F-Qd9PP5cwDxK60_fC" };
    },
    function (e, t, n) {
      e.exports = { Modal: "_32_-amvWF8w07UmzDeLfZb" };
    },
    function (e, t, n) {
      e.exports = {
        loader: "UBmsktTD6us6IP-6aYec5",
        load2: "_1N7mgFPOaqyEMO5kgrH5tH",
      };
    },
    ,
    ,
    function (e, t, n) {
      e.exports = n(93);
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {
      e.exports = {
        App: "_1o-FpbQrR11SDFN-G7O4U3",
        "App-logo": "_3JCPttIlaO1n9gbarj-AYQ",
        "App-logo-spin": "RvI1Jd7nZvV5oabR4RbAY",
        "App-header": "_3iH8LjVH-8aINDFVrlCaZ1",
        "App-link": "_13fTZYk7Fx94Q52NR6_8FR",
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(26),
        i = n.n(o),
        c = (n(69), n(4)),
        u = n(5),
        l = n(7),
        s = n(6),
        d = (n(70), n(10)),
        p = n(53),
        m = n.n(p),
        h = n(31),
        f = n.n(h),
        g = n.p + "static/media/burger-logo.ec69c7f6.png",
        b = n(54),
        E = n.n(b),
        v = function (e) {
          return a.a.createElement(
            "div",
            { className: E.a.Logo },
            a.a.createElement("img", { alt: "My Logo", src: g })
          );
        },
        y = n(55),
        k = n.n(y),
        I = n(34),
        O = n.n(I),
        S = n(21),
        N = function (e) {
          return a.a.createElement(
            "li",
            { className: O.a.NavigationItem },
            a.a.createElement(
              S.b,
              { to: e.link, exact: !0, activeClassName: O.a.active },
              e.children
            )
          );
        },
        j = function (e) {
          return a.a.createElement(
            "ul",
            { className: k.a.NavigationItems },
            a.a.createElement(N, { link: "/" }, "Burger Builder"),
            e.isAuthenticated
              ? a.a.createElement(N, { link: "/orders" }, "Orders")
              : null,
            e.isAuthenticated
              ? a.a.createElement(N, { link: "/logout" }, "Logout")
              : a.a.createElement(N, { link: "/login" }, "Login")
          );
        },
        C = n(56),
        A = n.n(C),
        D = function (e) {
          return a.a.createElement(
            "div",
            { className: A.a.DrawerToggle, onClick: e.openSideDrawer },
            a.a.createElement("div", null),
            a.a.createElement("div", null),
            a.a.createElement("div", null)
          );
        },
        _ = function (e) {
          return a.a.createElement(
            "header",
            { className: f.a.Toolbar },
            a.a.createElement(D, { openSideDrawer: e.openSideDrawer }),
            a.a.createElement(
              "div",
              { className: f.a.Logo },
              a.a.createElement(v, null)
            ),
            a.a.createElement(
              "nav",
              { className: f.a.DesktopOnly },
              a.a.createElement(j, { isAuthenticated: e.isAuth })
            )
          );
        },
        w = n(20),
        T = n.n(w),
        R = n(28),
        B = function (e) {
          var t = [T.a.SideDrawer, T.a.Close];
          return (
            e.open && (t = [T.a.SideDrawer, T.a.Open]),
            a.a.createElement(
              d.a,
              null,
              a.a.createElement(
                "div",
                { className: T.a.mobileOnly },
                a.a.createElement(R.a, { show: e.open, clicked: e.closed })
              ),
              a.a.createElement(
                "div",
                { className: t.join(" "), onClick: e.closed },
                a.a.createElement(
                  "div",
                  { className: T.a.Logo },
                  a.a.createElement(v, null)
                ),
                a.a.createElement(
                  "nav",
                  null,
                  a.a.createElement(j, { isAuthenticated: e.isAuth })
                )
              )
            )
          );
        },
        P = n(14),
        x = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                showSideDrawer: !0,
              }),
              (e.sideDrawerClosedHandler = function () {
                e.setState({ showSideDrawer: !1 });
              }),
              (e.sideDrawerToggleHandler = function () {
                e.setState(function (t) {
                  return { showSideDrawer: !e.state.showSideDrawer };
                });
              }),
              e
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    d.a,
                    null,
                    a.a.createElement(_, {
                      isAuth: this.props.isAuthenticated,
                      openSideDrawer: this.sideDrawerToggleHandler,
                    }),
                    a.a.createElement(B, {
                      isAuth: this.props.isAuthenticated,
                      open: this.state.showSideDrawer,
                      closed: this.sideDrawerClosedHandler,
                    }),
                    a.a.createElement(
                      "main",
                      { className: m.a.Content },
                      this.props.children
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        U = Object(P.b)(function (e) {
          return { isAuthenticated: !!e.auth.token };
        })(x),
        H = n(17),
        L = n(52),
        F = n(38),
        M = n.n(F),
        W = n(25),
        Y = n.n(W),
        q = function (e) {
          return a.a.createElement(
            "div",
            { className: Y.a.BuildControl },
            a.a.createElement("div", { className: Y.a.Label }, e.label),
            a.a.createElement(
              "button",
              {
                onClick: e.removeIngrient,
                className: Y.a.Less,
                disabled: e.disabledBtn,
              },
              "Less"
            ),
            a.a.createElement(
              "button",
              { onClick: e.addIngredient, className: Y.a.More },
              "More"
            )
          );
        },
        Z = [
          { label: "Salad", type: "salad" },
          { label: "Bacon", type: "bacon" },
          { label: "Cheese", type: "cheese" },
          { label: "Meat", type: "meat" },
        ],
        J = function (e) {
          return a.a.createElement(
            "div",
            { className: M.a.BuildControls },
            a.a.createElement(
              "p",
              null,
              "Current Price: ",
              a.a.createElement("strong", null, e.price.toFixed(2))
            ),
            Z.map(function (t) {
              return a.a.createElement(q, {
                key: t.label,
                label: t.label,
                addIngredient: function () {
                  return e.addIngredient(t.type);
                },
                removeIngrient: function () {
                  return e.removeIngredient(t.type);
                },
                disabledBtn: e.buttondisabled[t.type],
              });
            }),
            a.a.createElement(
              "button",
              {
                className: M.a.OrderButton,
                disabled: !e.purchasable,
                onClick: e.purchasing,
              },
              e.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"
            )
          );
        },
        Q = n(29),
        G = n(32),
        z = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(u.a)(n, [
              { key: "componentWillUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = Object.keys(this.props.ingrediends).map(function (t) {
                      return a.a.createElement(
                        "li",
                        { key: t },
                        a.a.createElement(
                          "span",
                          { style: { textTransform: "capitalize" } },
                          t
                        ),
                        ": ",
                        e.props.ingrediends[t]
                      );
                    });
                  return a.a.createElement(
                    d.a,
                    null,
                    a.a.createElement("h3", null, "Your Order"),
                    a.a.createElement(
                      "p",
                      null,
                      "A delicious burger with the following ingredients:"
                    ),
                    a.a.createElement("ul", null, t),
                    a.a.createElement(
                      "p",
                      null,
                      a.a.createElement(
                        "strong",
                        null,
                        "Total Price: ",
                        this.props.price.toFixed(2)
                      )
                    ),
                    a.a.createElement("p", null, "Continue to checkout"),
                    a.a.createElement(
                      G.a,
                      { btnType: "Danger", clicked: this.props.modalClosed },
                      "CANCEL"
                    ),
                    a.a.createElement(
                      G.a,
                      {
                        btnType: "Success",
                        clicked: this.props.continuePurchase,
                      },
                      "CONTINUE"
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        X = n(40),
        V = n(41),
        K = n(15),
        $ = n(18),
        ee = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                purchasing: !1,
              }),
              (e.updatePurchaseState = function (e) {
                return (
                  Object.keys(e)
                    .map(function (t) {
                      return e[t];
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    }, 0) > 0
                );
              }),
              (e.purchaseHandler = function () {
                e.props.isAuthenticated
                  ? e.setState({ purchasing: !0 })
                  : (e.props.onSetAuthRedirectPath("/checkout"),
                    e.props.history.push("/login"));
              }),
              (e.purchaseCancelHandler = function () {
                e.setState({ purchasing: !1 });
              }),
              (e.purchaseContinueHandler = function () {
                e.props.onInitPurchase(), e.props.history.push("/checkout");
              }),
              e
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onInitIngredients();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = Object(H.a)({}, this.props.ing);
                  for (var t in e) e[t] = e[t] <= 0;
                  var n = null,
                    r = this.props.error
                      ? a.a.createElement(
                          "h1",
                          { style: { textAlign: "center" } },
                          "Ingredients can't be loaded!! "
                        )
                      : a.a.createElement(X.a, null);
                  return (
                    this.props.ing &&
                      ((r = a.a.createElement(
                        d.a,
                        null,
                        a.a.createElement(L.a, { ingredients: this.props.ing }),
                        a.a.createElement(J, {
                          addIngredient: this.props.addIngredient,
                          removeIngredient: this.props.removeIngredient,
                          buttondisabled: e,
                          price: this.props.totalPrice,
                          purchasable: this.updatePurchaseState(this.props.ing),
                          isAuth: this.props.isAuthenticated,
                          purchasing: this.purchaseHandler,
                        })
                      )),
                      (n = a.a.createElement(z, {
                        ingrediends: this.props.ing,
                        modalClosed: this.purchaseCancelHandler,
                        continuePurchase: this.purchaseContinueHandler,
                        price: this.props.totalPrice,
                      }))),
                    a.a.createElement(
                      d.a,
                      null,
                      a.a.createElement(
                        Q.a,
                        {
                          show: this.state.purchasing,
                          modalClosed: this.purchaseCancelHandler,
                        },
                        n
                      ),
                      r
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        te = Object(P.b)(
          function (e) {
            return {
              ing: e.burgerBuilder.ingredients,
              totalPrice: e.burgerBuilder.totalPrice,
              error: e.burgerBuilder.error,
              isAuthenticated: !!e.auth.token,
            };
          },
          function (e) {
            return {
              addIngredient: function (t) {
                return e(K.a(t));
              },
              removeIngredient: function (t) {
                return e(K.i(t));
              },
              onInitIngredients: function () {
                return e(K.e());
              },
              onInitPurchase: function () {
                return e(K.h());
              },
              onSetAuthRedirectPath: function (t) {
                return e(K.j(t));
              },
            };
          }
        )(Object(V.a)(ee, $.a)),
        ne = n(3),
        re = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return ((e = t.call.apply(t, [this].concat(a))).state = {}), e;
          }
          return (
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onLogout();
                },
              },
              {
                key: "render",
                value: function () {
                  return a.a.createElement(ne.a, { to: "/" });
                },
              },
            ]),
            n
          );
        })(r.Component),
        ae = Object(P.b)(null, function (e) {
          return {
            onLogout: function () {
              return e(K.f());
            },
          };
        })(re),
        oe = function (e) {
          return (function (t) {
            Object(l.a)(r, t);
            var n = Object(s.a)(r);
            function r() {
              var e;
              Object(c.a)(this, r);
              for (
                var t = arguments.length, a = new Array(t), o = 0;
                o < t;
                o++
              )
                a[o] = arguments[o];
              return (
                ((e = n.call.apply(n, [this].concat(a))).state = {
                  component: null,
                }),
                e
              );
            }
            return (
              Object(u.a)(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t = this;
                    e().then(function (e) {
                      t.setState({ component: e.default });
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state.component;
                    return e ? a.a.createElement(e, this.props) : null;
                  },
                },
              ]),
              r
            );
          })(r.Component);
        },
        ie = oe(function () {
          return n.e(3).then(n.bind(null, 102));
        }),
        ce = oe(function () {
          return n.e(5).then(n.bind(null, 103));
        }),
        ue = oe(function () {
          return n.e(4).then(n.bind(null, 101));
        }),
        le = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onTryAutoSignup();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = a.a.createElement(
                    ne.d,
                    null,
                    a.a.createElement(ne.b, { path: "/login", component: ue }),
                    a.a.createElement(ne.b, {
                      path: "/",
                      exact: !0,
                      component: te,
                    }),
                    a.a.createElement(ne.a, { to: "/" })
                  );
                  return (
                    this.props.isAuthenticated &&
                      (e = a.a.createElement(
                        ne.d,
                        null,
                        a.a.createElement(ne.b, {
                          path: "/checkout",
                          component: ie,
                        }),
                        a.a.createElement(ne.b, {
                          path: "/orders",
                          component: ce,
                        }),
                        a.a.createElement(ne.b, {
                          path: "/logout",
                          component: ae,
                        }),
                        a.a.createElement(ne.b, {
                          path: "/",
                          exact: !0,
                          component: te,
                        }),
                        a.a.createElement(ne.a, { to: "/" })
                      )),
                    a.a.createElement(
                      "div",
                      { className: "App" },
                      a.a.createElement(U, null, e)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        se = Object(P.b)(
          function (e) {
            return { isAuthenticated: null !== e.auth.token };
          },
          function (e) {
            return {
              onTryAutoSignup: function () {
                return e(K.c());
              },
            };
          }
        )(le);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var de = n(19),
        pe = n(23),
        me = n(1),
        he = function (e, t) {
          return Object(H.a)(Object(H.a)({}, e), t);
        },
        fe = { ingredients: null, totalPrice: 4, error: !1, building: !1 },
        ge = { salad: 0.7, cheese: 0.6, bacon: 0.4, meat: 0.9 },
        be = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : fe,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case me.a:
              var n = Object(pe.a)(
                  {},
                  t.ingredientName,
                  e.ingredients[t.ingredientName] + 1
                ),
                r = he(e.ingredients, n),
                a = {
                  ingredients: r,
                  totalPrice: e.totalPrice + ge[t.ingredientName],
                  building: !0,
                };
              return he(e, a);
            case me.n:
              var o = Object(pe.a)(
                  {},
                  t.ingredientName,
                  e.ingredients[t.ingredientName] > 0
                    ? e.ingredients[t.ingredientName] - 1
                    : e.ingredients[t.ingredientName]
                ),
                i = he(e.ingredients, o),
                c = {
                  ingredients: i,
                  totalPrice: e.totalPrice - ge[t.ingredientName],
                  building: !0,
                };
              return he(e, c);
            case me.p:
              return he(e, {
                ingredients: {
                  salad: t.ingredients.salad,
                  bacon: t.ingredients.bacon,
                  cheese: t.ingredients.cheese,
                  meat: t.ingredients.meat,
                },
                totalPrice: fe.totalPrice,
                error: !1,
                building: !1,
              });
            case me.f:
              return he(e, { error: !0 });
            default:
              return e;
          }
        },
        Ee = { order: [], loading: !1, purchased: !1, orders: [] },
        ve = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ee,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case me.l:
              var n = he(t.orderData, { id: t.orderId });
              return he(e, {
                loading: !1,
                purchased: !0,
                order: e.order.concat(n),
              });
            case me.j:
              return he(e, { loading: !1 });
            case me.k:
              return he(e, { loading: !0 });
            case me.m:
              return he(e, { purchased: !1 });
            case me.i:
              return he(e, { loading: !0 });
            case me.h:
              return he(e, { orders: t.ordersData, loading: !1 });
            case me.g:
              return he(e, { loading: !1 });
            default:
              return e;
          }
        },
        ye = {
          token: null,
          userId: null,
          error: null,
          loading: !1,
          authRedirectPath: "/",
        },
        ke = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ye,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case me.d:
              return he(e, { error: null, loading: !0 });
            case me.e:
              return he(e, {
                token: t.data.idToken,
                userId: t.data.localId,
                error: null,
                loading: !1,
              });
            case me.b:
              var n;
              switch (t.error) {
                case "EMAIL_EXISTS":
                  n = "Email Already exist please login";
                  break;
                case "INVALID_PASSWORD":
                  n = "Invalid Password";
                  break;
                case "EMAIL_NOT_FOUND":
                  n = "Email not found - Please register First";
                  break;
                default:
                  n = null;
              }
              return he(e, { error: n, loading: !1 });
            case me.c:
              return he(e, { token: null, userId: null });
            case me.o:
              return he(e, { authRedirectPath: t.path });
            default:
              return e;
          }
        },
        Ie = n(62),
        Oe = de.d,
        Se = Object(de.c)({ burgerBuilder: be, order: ve, auth: ke }),
        Ne = Object(de.e)(Se, Oe(Object(de.a)(Ie.a)));
      i.a.render(
        a.a.createElement(
          a.a.StrictMode,
          null,
          a.a.createElement(
            P.a,
            { store: Ne },
            a.a.createElement(S.a, null, a.a.createElement(se, null))
          )
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[64, 1, 2]],
]);
//# sourceMappingURL=main.d7727557.chunk.js.map
