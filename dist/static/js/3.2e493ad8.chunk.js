(this["webpackJsonpreact-burger-app"] =
  this["webpackJsonpreact-burger-app"] || []).push([
  [3],
  {
    102: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(4),
        r = a(5),
        l = a(7),
        i = a(6),
        o = a(0),
        c = a.n(o),
        u = a(52),
        s = a(32),
        d = a(97),
        p = a.n(d),
        m = function (e) {
          return c.a.createElement(
            "div",
            { className: p.a.CheckoutSummary },
            c.a.createElement("h1", null, "We hope it tastes well!!"),
            c.a.createElement(
              "div",
              { style: { width: "100%", margin: "auto" } },
              c.a.createElement(u.a, { ingredients: e.ingredients })
            ),
            c.a.createElement(
              s.a,
              { btnType: "Danger", clicked: e.checkoutCancelled },
              "CANCEL"
            ),
            c.a.createElement(
              s.a,
              { btnType: "Success", clicked: e.checkoutContinued },
              "CONTINUE"
            )
          );
        },
        h = a(3),
        v = a(17),
        g = a(98),
        f = a.n(g),
        y = a(18),
        C = a(40),
        b = a(94),
        E = a(14),
        k = a(41),
        O = a(15),
        j = a(96),
        x = (function (e) {
          Object(l.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
              l[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = {
                orderForm: {
                  name: {
                    elementType: "input",
                    elementConfig: { type: "text", placeholder: "Your Name" },
                    value: "",
                    validation: { required: !0 },
                    valid: !1,
                    touched: !1,
                  },
                  street: {
                    elementType: "input",
                    elementConfig: { type: "text", placeholder: "Your Street" },
                    value: "",
                    validation: { required: !0 },
                    valid: !1,
                    touched: !1,
                  },
                  zipCode: {
                    elementType: "input",
                    elementConfig: {
                      type: "text",
                      placeholder: "Your Zip Code",
                    },
                    value: "",
                    validation: {
                      required: !0,
                      minLength: 4,
                      maxLength: 6,
                      isNumeric: !0,
                    },
                    valid: !1,
                    touched: !1,
                  },
                  country: {
                    elementType: "input",
                    elementConfig: {
                      type: "text",
                      placeholder: "Your Country",
                    },
                    value: "",
                    validation: { required: !0 },
                    valid: !1,
                    touched: !1,
                  },
                  deliveryMethod: {
                    elementType: "select",
                    elementConfig: {
                      options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "average", displayValue: "Average" },
                        { value: "slow", displayValue: "Slow" },
                      ],
                    },
                    value: "fastest",
                    validation: {},
                    valid: !0,
                  },
                  email: {
                    elementType: "input",
                    elementConfig: { type: "email", placeholder: "Your Email" },
                    value: "",
                    validation: { required: !0, isEmail: !0 },
                    valid: !1,
                    touched: !1,
                  },
                },
                formIsValid: !1,
              }),
              (e.orderHandler = function (t) {
                t.preventDefault(), e.setState({ loading: !0 });
                var a = {};
                for (var n in e.state.orderForm)
                  a[n] = e.state.orderForm[n].value;
                var r = {
                  ingrediends: e.props.ings,
                  price: e.props.totalPrice.toFixed(2),
                  orderData: a,
                  userId: e.props.userId,
                };
                e.props.onOrderBurger(r, e.props.token);
              }),
              (e.inputChangeHandler = function (t, a) {
                var n = Object(v.a)(
                    {},
                    JSON.parse(JSON.stringify(e.state.orderForm))
                  ),
                  r = Object(v.a)({}, n[a]);
                (r.value = t.target.value),
                  (r.valid = Object(j.a)(r.value, r.validation)),
                  (r.touched = !0),
                  (n[a] = r);
                var l = !0;
                for (var i in n) l = n[i].valid && l;
                e.setState({ orderForm: n, formIsValid: l });
              }),
              e
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [];
                  for (var a in this.state.orderForm)
                    t.push({ id: a, config: this.state.orderForm[a] });
                  var n = c.a.createElement(
                    "form",
                    { onSubmit: this.orderHandler },
                    t.map(function (t, a) {
                      return c.a.createElement(b.a, {
                        key: a,
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
                    }),
                    c.a.createElement(
                      s.a,
                      { btnType: "Success", disabled: !this.state.formIsValid },
                      "ORDER"
                    )
                  );
                  return (
                    this.props.loading && (n = c.a.createElement(C.a, null)),
                    c.a.createElement(
                      "div",
                      { className: f.a.ContactData },
                      c.a.createElement("h4", null, "Enter you contact Data!!"),
                      n
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.Component),
        I = Object(E.b)(
          function (e) {
            return {
              ings: e.burgerBuilder.ingredients,
              totalPrice: e.burgerBuilder.totalPrice,
              loading: e.order.loading,
              token: e.auth.token,
              userId: e.auth.userId,
            };
          },
          function (e) {
            return {
              onOrderBurger: function (t, a) {
                return e(O.g(t, a));
              },
            };
          }
        )(Object(k.a)(x, y.a)),
        N = (function (e) {
          Object(l.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
              l[i] = arguments[i];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(l)
              )).checkoutCancelledHandler = function () {
                e.props.history.goBack();
              }),
              (e.checkoutContinuedHandler = function () {
                e.props.history.replace("/checkout/contact-data");
              }),
              e
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = c.a.createElement(h.a, { to: "/" });
                  if (this.props.ings) {
                    var t = this.props.purchased
                      ? c.a.createElement(h.a, { to: "/" })
                      : null;
                    e = c.a.createElement(
                      "div",
                      null,
                      t,
                      c.a.createElement(m, {
                        ingredients: this.props.ings,
                        checkoutCancelled: this.checkoutCancelledHandler,
                        checkoutContinued: this.checkoutContinuedHandler,
                      }),
                      c.a.createElement(h.b, {
                        path: this.props.match.path + "/contact-data",
                        component: I,
                      })
                    );
                  }
                  return e;
                },
              },
            ]),
            a
          );
        })(o.Component);
      t.default = Object(E.b)(function (e) {
        return {
          ings: e.burgerBuilder.ingredients,
          purchased: e.order.purchased,
        };
      })(N);
    },
    94: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        l = a(95),
        i = a.n(l);
      t.a = function (e) {
        var t = null,
          a = [i.a.InputElement],
          n = null;
        switch (
          (e.invalid && e.shouldValidate && e.touched && a.push(i.a.Invalid),
          e.invalid &&
            e.touched &&
            (n = r.a.createElement("p", null, "Please enter a valid value!")),
          e.elementType)
        ) {
          case "input":
            t = r.a.createElement(
              "input",
              Object.assign({ className: a.join(" ") }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
            break;
          case "textarea":
            t = r.a.createElement(
              "textarea",
              Object.assign({ className: a.join(" ") }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
            break;
          case "select":
            t = r.a.createElement(
              "select",
              { className: a.join(" "), value: e.value, onChange: e.changed },
              e.elementConfig.options.map(function (e) {
                return r.a.createElement(
                  "option",
                  { key: e.value, value: e.value },
                  e.displayValue
                );
              })
            );
            break;
          default:
            t = r.a.createElement(
              "input",
              Object.assign({ className: i.a.InputElement }, e.elementConfig, {
                value: e.value,
                onChange: e.changed,
              })
            );
        }
        return r.a.createElement(
          "div",
          { className: i.a.Input },
          r.a.createElement("label", { className: i.a.Label }, e.label),
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
    97: function (e, t, a) {
      e.exports = { CheckoutSummary: "_1xBm4j5hECL-q6sCIhiBB4" };
    },
    98: function (e, t, a) {
      e.exports = { ContactData: "_1J81rlRO5zxuF98VMkEamZ" };
    },
  },
]);
//# sourceMappingURL=3.2e493ad8.chunk.js.map
