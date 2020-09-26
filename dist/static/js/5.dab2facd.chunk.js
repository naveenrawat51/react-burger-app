(this["webpackJsonpreact-burger-app"] =
  this["webpackJsonpreact-burger-app"] || []).push([
  [5],
  {
    103: function (e, r, n) {
      "use strict";
      n.r(r);
      var t = n(4),
        a = n(5),
        i = n(7),
        c = n(6),
        o = n(0),
        s = n.n(o),
        u = n(99),
        p = n.n(u),
        d = function (e) {
          var r = [];
          for (var n in e.ingredients)
            r.push({ name: n, amount: e.ingredients[n] });
          var t = r.map(function (e, r) {
            return s.a.createElement(
              "span",
              {
                style: {
                  textTransform: "capitalize",
                  display: "inline-block",
                  margin: "0 8px",
                  border: "1px solid #ccc",
                  padding: "5px",
                },
                key: r,
              },
              e.name,
              " (",
              e.amount,
              ")"
            );
          });
          return s.a.createElement(
            "div",
            { className: p.a.Order },
            s.a.createElement("p", null, "Ingredients: ", t),
            s.a.createElement(
              "p",
              null,
              "Price: ",
              s.a.createElement("strong", null, "USD ", e.price)
            )
          );
        },
        l = n(18),
        m = n(41),
        f = n(40),
        h = n(15),
        g = n(14),
        b = (function (e) {
          Object(i.a)(n, e);
          var r = Object(c.a)(n);
          function n() {
            return Object(t.a)(this, n), r.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.fetchOrders(this.props.token, this.props.userId);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = s.a.createElement(f.a, null);
                  return (
                    this.props.loading ||
                      (e = this.props.orders.map(function (e) {
                        return s.a.createElement(d, {
                          key: e.id,
                          ingredients: e.ingrediends,
                          price: e.price,
                        });
                      })),
                    s.a.createElement("div", null, e)
                  );
                },
              },
            ]),
            n
          );
        })(o.Component);
      r.default = Object(g.b)(
        function (e) {
          return {
            orders: e.order.orders,
            loading: e.order.loading,
            token: e.auth.token,
            userId: e.auth.userId,
          };
        },
        function (e) {
          return {
            fetchOrders: function (r, n) {
              return e(h.d(r, n));
            },
          };
        }
      )(Object(m.a)(b, l.a));
    },
    99: function (e, r, n) {
      e.exports = { Order: "_4yi4ZpfqAgHINYViIZYP6" };
    },
  },
]);
//# sourceMappingURL=5.dab2facd.chunk.js.map
