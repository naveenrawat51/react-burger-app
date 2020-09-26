(this["webpackJsonpreact-burger-app"] =
  this["webpackJsonpreact-burger-app"] || []).push([
  [4],
  {
    100: function (e, t, a) {
      e.exports = {
        Auth: "_2YUr1vYMbwujw6K1HuakLc",
        ContactData: "_1Fuu3PjfwjLKAWKqQXtkT9",
      };
    },
    101: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(23),
        i = a(17),
        r = a(4),
        l = a(5),
        u = a(7),
        o = a(6),
        s = a(0),
        c = a.n(s),
        d = a(94),
        h = a(32),
        p = a(100),
        m = a.n(p),
        g = a(15),
        v = a(14),
        f = a(40),
        b = a(3),
        E = a(96),
        j = (function (e) {
          Object(u.a)(a, e);
          var t = Object(o.a)(a);
          function a() {
            var e;
            Object(r.a)(this, a);
            for (var l = arguments.length, u = new Array(l), o = 0; o < l; o++)
              u[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(u))).state = {
                loginForm: {
                  email: {
                    elementType: "input",
                    elementConfig: {
                      type: "email",
                      placeholder: "Your Email Address",
                    },
                    value: "",
                    validation: { required: !0, isEmail: !0 },
                    valid: !1,
                    touched: !1,
                  },
                  password: {
                    elementType: "input",
                    elementConfig: {
                      type: "password",
                      placeholder: "Your Password",
                    },
                    value: "",
                    validation: { required: !0, minLength: 5 },
                    valid: !1,
                    touched: !1,
                  },
                },
                formIsValid: !1,
                isSignup: !0,
              }),
              (e.inputChangeHandler = function (t, a) {
                var r = Object(i.a)(
                    Object(i.a)(
                      {},
                      JSON.parse(JSON.stringify(e.state.loginForm))
                    ),
                    {},
                    Object(n.a)(
                      {},
                      a,
                      Object(i.a)(
                        Object(i.a)({}, e.state.loginForm[a]),
                        {},
                        {
                          value: t.target.value,
                          valid: Object(E.a)(
                            t.target.value,
                            e.state.loginForm[a].validation
                          ),
                          touched: !0,
                        }
                      )
                    )
                  ),
                  l = !0;
                for (var u in r) l = r[u].valid && l;
                e.setState({ loginForm: r, formIsValid: l });
              }),
              (e.submitHandler = function (t) {
                t.preventDefault(),
                  e.props.onAuth(
                    e.state.loginForm.email.value,
                    e.state.loginForm.password.value,
                    e.state.isSignup
                  );
              }),
              (e.switchAuthModeHandler = function () {
                e.setState(function (e) {
                  return { isSignup: !e.isSignup };
                });
              }),
              e
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.buildingBurger ||
                    "/" === this.props.authRedirectPath ||
                    this.props.onSetRedirectPath();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [];
                  for (var a in this.state.loginForm)
                    t.push({ id: a, config: this.state.loginForm[a] });
                  var n = t.map(function (t, a) {
                    return c.a.createElement(d.a, {
                      key: t.id,
                      elementType: t.config.elementType,
                      elementConfig: t.config.elementConfig,
                      value: t.config.value,
                      changed: function (a) {
                        return e.inputChangeHandler(a, t.id);
                      },
                      invalid: !t.config.valid,
                      shouldValidate: t.config.validation,
                      touched: t.config.touched,
                    });
                  });
                  this.props.loading && (n = c.a.createElement(f.a, null));
                  var i = null;
                  return (
                    this.props.error &&
                      (i = c.a.createElement(
                        "p",
                        { style: { color: "red" } },
                        this.props.error
                      )),
                    c.a.createElement(
                      "div",
                      { className: m.a.Auth },
                      this.props.isAuthenticated
                        ? c.a.createElement(b.a, {
                            to: this.props.authRedirectPath,
                          })
                        : null,
                      i,
                      c.a.createElement(
                        "form",
                        { onSubmit: this.submitHandler },
                        n,
                        c.a.createElement(
                          h.a,
                          {
                            btnType: "Success",
                            disabled: !this.state.formIsValid,
                          },
                          this.state.isSignup ? "SIGNUP" : "SIGNIN"
                        )
                      ),
                      c.a.createElement(
                        h.a,
                        {
                          btnType: "Danger",
                          clicked: this.switchAuthModeHandler,
                        },
                        "SWITCH TO ",
                        this.state.isSignup ? "SIGNIN" : "SIGNUP"
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.Component);
      t.default = Object(v.b)(
        function (e) {
          return {
            loading: e.auth.loading,
            error: e.auth.error,
            isAuthenticated: !!e.auth.token,
            buildingBurger: e.burgerBuilder.building,
            authRedirectPath: e.auth.authRedirectPath,
          };
        },
        function (e) {
          return {
            onAuth: function (t, a, n) {
              return e(g.b(t, a, n));
            },
            onSetRedirectPath: function () {
              return e(g.j("/"));
            },
          };
        }
      )(j);
    },
    94: function (e, t, a) {
      "use strict";
      var n = a(0),
        i = a.n(n),
        r = a(95),
        l = a.n(r);
      t.a = function (e) {
        var t = null,
          a = [l.a.InputElement],
          n = null;
        switch (
          (e.invalid && e.shouldValidate && e.touched && a.push(l.a.Invalid),
          e.invalid &&
            e.touched &&
            (n = i.a.createElement("p", null, "Please enter a valid value!")),
          e.elementType)
        ) {
          case "input":
            t = i.a.createElement(
              "input",
              Object.assign({ className: a.join(" ") }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
            break;
          case "textarea":
            t = i.a.createElement(
              "textarea",
              Object.assign({ className: a.join(" ") }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
            break;
          case "select":
            t = i.a.createElement(
              "select",
              { className: a.join(" "), value: e.value, onChange: e.changed },
              e.elementConfig.options.map(function (e) {
                return i.a.createElement(
                  "option",
                  { key: e.value, value: e.value },
                  e.displayValue
                );
              })
            );
            break;
          default:
            t = i.a.createElement(
              "input",
              Object.assign({ className: l.a.InputElement }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
        }
        return i.a.createElement(
          "div",
          { className: l.a.Input },
          i.a.createElement("label", { className: l.a.Label }, e.label),
          t,
          n
        );
      };
    },
    95: function (e, t, a) {
      e.exports = {
        Input: "s67N0w35nKdhFxX_3zncw",
        Label: "_n-1my-7YxR9EuzWR3hhB",
        InputElement: "_2-aFxd6_SUnHTHpTf8dvYS",
        Invalid: "_1sl1p7M77V1I9nxTQviKpw",
      };
    },
    96: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = function (e, t) {
        var a = !0;
        if (
          (t.required && (a = "" !== e.trim() && a),
          t.minLength && (a = e.length >= t.minLength && a),
          t.maxLength && (a = e.length <= t.maxLength && a),
          t.isEmail)
        ) {
          a =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              e
            ) && a;
        }
        if (t.isNumeric) {
          a = /^\d+$/.test(e) && a;
        }
        return a;
      };
    },
  },
]);
//# sourceMappingURL=4.a42d3db7.chunk.js.map
