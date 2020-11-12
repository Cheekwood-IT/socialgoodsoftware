// GTM
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NN83BFS");

// Google Analtytics
("use strict");
function ownKeys(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(a);
        b &&
            (d = d.filter(function (b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
    }
    return c;
}
function _objectSpread(a) {
    for (var b, c = 1; c < arguments.length; c++)
        (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
                ? ownKeys(b, !0).forEach(function (c) {
                      _defineProperty(a, c, b[c]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
                : ownKeys(b).forEach(function (c) {
                      Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c));
                  });
    return a;
}
function _defineProperty(a, b, c) {
    return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = c), a;
}
var processCartContent = function () {
        var a = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
        if ($ && "function" == typeof $ && (0 !== $(".PaymentPart_CartRows").length || 0 !== $(".PaymentPart_NoItems").length)) {
            var b = function () {
                    var a = document.cookie.split(";").find(function (a) {
                        return a.trim().startsWith("SalesOrderID00000000-0000-0000-0000-000000000000=SalesOrderID=");
                    });
                    return a ? a.replace("SalesOrderID00000000-0000-0000-0000-000000000000=SalesOrderID=", "").replace("&isExpirationSet=True", "").replace("&isExpirationSet=False", "") : "ac-content-cart";
                },
                c = function (a) {
                    try {
                        var c = b();
                        localStorage.setItem(c, JSON.stringify(a));
                    } catch (a) {}
                },
                d = function () {
                    try {
                        var a = b();
                        return JSON.parse(localStorage.getItem(a));
                    } catch (a) {
                        return null;
                    }
                },
                e = function (a) {
                    var b = [];
                    return (
                        a.each(function (a, c) {
                            return !!c && b.push(c.textContent);
                        }),
                        b
                    );
                },
                f = function (a) {
                    return a.replace(/[^\d\.]*/g, "");
                },
                g = function (a) {
                    return e(a).map(function (a) {
                        return parseInt(f(a), 10);
                    });
                },
                h = function (a) {
                    return e(a).map(function (a) {
                        return parseFloat(f(a));
                    });
                },
                i = function (a) {
                    var b = e(a),
                        c = {},
                        d = 0;
                    for (0 != b.length % 2 && ((c.Details = b[d]), (d = 1)); d < b.length; d += 2) {
                        var f = b[d].replace(":", "").trim();
                        c[f] = b[d + 1];
                    }
                    return c;
                },
                j = function (a) {
                    return "".concat(a.name).concat(JSON.stringify(a.details)).concat(a.unitPrice);
                },
                k = function (a) {
                    var b = new Map();
                    return (
                        a.forEach(function (a) {
                            var c = j(a);
                            b.set(c, _objectSpread({}, a));
                        }),
                        b
                    );
                },
                l = function (a, b) {
                    var c = { add: [], remove: [] };
                    if (!!a && !!b) {
                        var d = k(a.products),
                            e = k(b.products),
                            f = $(Array.from(e.keys())).not(Array.from(d.keys())).get();
                        f.forEach(function (a) {
                            return c.add.push(e.get(a));
                        });
                        var g = $(Array.from(d.keys())).not(Array.from(e.keys())).get();
                        g.forEach(function (a) {
                            return c.remove.push(d.get(a));
                        }),
                            d.forEach(function (a, b) {
                                if (e.has(b)) {
                                    var d = e.get(b);
                                    a.quantity > d.quantity
                                        ? c.remove.push(_objectSpread({}, a, { quantity: a.quantity - d.quantity, price: a.price - d.price }))
                                        : a.quantity < d.quantity && c.add.push(_objectSpread({}, a, { quantity: d.quantity - a.quantity, price: d.price - a.price }));
                                }
                            });
                    } else !a || b ? a || !b || (c.add = b.products) : (c.remove = a.products);
                    return c;
                },
                m = function () {
                    var a = $(".cart-type-group"),
                        b = [],
                        c = 0,
                        d = 0;
                    return (
                        a.each(function (a, f) {
                            var j = $(f),
                                k = e(j.find(".PaymentPart_CartItemTypeRow span"))[0];
                            j.find(".PaymentPart_CartRows.show-grid-row").each(function (a, f) {
                                try {
                                    var j,
                                        l = $(f),
                                        m = e(l.find("a.PaymentPart_CartItemLink"))[0],
                                        n = i(l.find(".PaymentPart_CartItemDetails > div > span"));
                                    Object.values(n).find(function (a) {
                                        var b = new Date(a);
                                        return "number" == typeof b.getDate() && ((j = b.format("yyyy-MM-dd")), !0);
                                    });
                                    var o = g(l.find(".PaymentPart_CartCurrencyCell > span"))[0],
                                        p = h(l.find('[id*="_labelItemUnitPrice_"]'))[0],
                                        q = h(l.find(".PaymentPart_CartItemTotal"))[0];
                                    "donations" === k.toLowerCase().trim() && ((m = "".concat(k)), (o = 1), (p = q));
                                    var r = { name: m, details: n, quantity: o, unitPrice: p, price: q, category: k };
                                    j && (r.date = j), b.push(r), (c += o), (d += q);
                                } catch (a) {}
                            });
                        }),
                        { products: b, quantity: c, price: d }
                    );
                },
                n = d(),
                o = m(),
                p = l(n, o);
            return a && c(o), (o.pending = p), o;
        }
    },
    emptyCartObserver = function () {
        if ($ && "function" == typeof $) {
            var a = $("main.main-Content")[0],
                b = function (a, b) {
                    var c = !0,
                        d = !1,
                        e = void 0;
                    try {
                        for (var f, g, h = a[Symbol.iterator](); !(c = (f = h.next()).done); c = !0)
                            (g = f.value),
                                "childList" === g.type &&
                                    g.addedNodes.forEach(function (a) {
                                        !a.innerHTML || -1 === a.innerHTML.indexOf("PaymentPart_NoItems") || (b.disconnect(), (window.cc = window.__pcc(!0)), window.__utc());
                                    });
                    } catch (a) {
                        (d = !0), (e = a);
                    } finally {
                        try {
                            c || null == h["return"] || h["return"]();
                        } finally {
                            if (d) throw e;
                        }
                    }
                },
                c = new MutationObserver(b);
            c.observe(a, { attributes: !1, childList: !0, subtree: !0 });
        }
    },
    updateFacebookPixelCart = function () {
        var a = window.cc;
        if (a && a.pending) {
            try {
                if (void 0 === fbq || "function" != typeof fbq)
                    return void setTimeout(function () {
                        return updateFacebookPixelCart();
                    }, 1e3);
            } catch (a) {
                return void setTimeout(function () {
                    return updateFacebookPixelCart();
                }, 1e3);
            }
            var b = function (a) {
                    return _objectSpread({ id: a.name, price: a.price, quantity: a.quantity, category: a.category }, a.details);
                },
                c = function (a) {
                    var c = [],
                        d = [];
                    0 < a.length &&
                        (a.forEach(function (a, e) {
                            var f = b(a, e + 1);
                            d.push(f), c.push(f.id);
                        }),
                        fbq("track", "AddToCart", { content_ids: c, content_type: "product", currency: "USD", contents: d }));
                },
                d = a.pending.add;
            !!d && Array.isArray(d) && c(d);
        }
    },
    updateAnalyticsCart = function () {
        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "gtm1",
            b = window.cc,
            c = "";
        if ((a && (c = "".concat(a, ".")), b && b.pending)) {
            try {
                if (void 0 === ga || "function" != typeof ga)
                    return void setTimeout(function () {
                        return updateAnalyticsCart(a);
                    }, 1e3);
            } catch (b) {
                return void setTimeout(function () {
                    return updateAnalyticsCart(a);
                }, 1e3);
            }
            ga("".concat(c, "require"), "ec");
            var d = function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                    ga("".concat(c, "ec:addProduct"), _objectSpread({ name: a.name, category: a.category, position: b, price: a.price, quantity: a.quantity }, a.details));
                },
                e = function (a, b) {
                    if (0 < b.length) {
                        b.forEach(function (a, b) {
                            d(a, b + 1);
                        });
                        var e = a ? "add" : "remove";
                        ga("".concat(c, "ec:setAction"), e), ga("".concat(c, "send"), "pageview");
                    }
                },
                f = b.pending,
                g = f.add,
                h = f.remove;
            !!g && Array.isArray(g) && e(!0, g), !!h && Array.isArray(h) && e(!1, h);
        }
    },
    updateGMTCart = function (a, b, c) {
        var d = b || window.cc;
        if (a && d && d.pending) {
            var e = function (a, b) {
                    var c = _objectSpread({ name: a.name, category: a.category, position: b, price: a.price, quantity: a.quantity }, a.details);
                    return a.date && (c.date = a.date), c;
                },
                f = function (a, b) {
                    if (0 < b.length) {
                        var c = b.map(function (a, b) {
                                return e(a, b + 1);
                            }),
                            d = a ? { action: "add", event: "gtm.addToCart" } : { action: "remove", event: "gtm.removeFromCart" },
                            f = { event: d.event, ecommerce: {} };
                        return a && (f.ecommerce.currencyCode = "USD"), (f.ecommerce[d.action] = { products: c }), f;
                    }
                    return null;
                },
                g = d.pending,
                h = g.add,
                i = g.remove;
            if (!!h && Array.isArray(h)) {
                var j = f(!0, h);
                c ? c(j) : j && a.push(j);
            } else;
            if (!!i && Array.isArray(i)) {
                var k = f(!1, i);
                c ? c(k) : k && a.push(k);
            } else;
        }
    };
(window.__eco = emptyCartObserver),
    (window.__pcc = processCartContent),
    (window.__uac = updateAnalyticsCart),
    (window.__fbc = updateFacebookPixelCart),
    (window.__gtm = updateGMTCart),
    (window.__utc = function () {
        !(0 < arguments.length && arguments[0] !== void 0) || arguments[0];
        window.__gtm(dataLayer), (window.cc = window.__pcc(!0));
    }),
    (window.__aaa = function () {
        window.__eco(), (window.cc = window.__pcc(!0)), window.__utc();
    }),
    window.__aaa();

// Cheekwood Theme
("use strict");
var nodeDoctype = document.implementation.createDocumentType("html", "-//W3C//DTD XHTML 1.0 Transitional//EN", "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtdd");
document.doctype ? document.replaceChild(nodeDoctype, document.doctype) : document.insertBefore(nodeDoctype, document.childNodes[0]);
var LOGIN_TITLE = "Sign in",
    MEMBER_SIGNIN = "Member Sign-In",
    MEMBER_DISCOUNT = "Please sign in to receive your member discount.",
    LOGIN_DESCRIPTION = '<p class="new-login-description">If you don\u2019t know what your membership e-mail is, please call our Membership Department at 615-353-6984 or 615-354-6389 or Email our Membership Department.</p>',
    REGISTER_NEW_ACCOUNT = "Register for new account",
    SIGNIN_AND_CHECKOUT = "Sign in & Check Out",
    JOIN_DISCOUNT = "Join Cheekwood today and get a discount on your order.",
    JOIN = "Join Cheekwood",
    GUEST = "Check Out as Guest",
    SOLDOUT_KEY = "Online Tickets are sold out",
    CALENDAR_KEY = "calendar page",
    CALENDAR_URL = "https://cheekwood.org/calendar/",
    MEMBERSHIP_URL = "https://cheekwood.org/support/membership",
    HOURS_URL = "https://cheekwood.org/visit/hours-directions/",
    TICKET_POLICY_URL = "https://cheekwood.org/cheekwood-ticket-policy/",
    MEDIA_KIT_URL = "https://cheekwood.org/media-kit/",
    CHEEKWOOD_URL = "https://cheekwood.org/",
    DISCOUNT_KEY = "Discounts:",
    DISCOUNT_APPLIED = "Discount Applied",
    FORGOTPASSWORDURL = "https://3892.blackbaudhosting.com/3892/page.aspx?pid=263&tab=500",
    REGISTERURL = "https://3892.blackbaudhosting.com/3892/page.aspx?pid=201",
    cdl = function (a) {
        if (window.ga !== void 0 && "function" == typeof window.ga.getAll) {
            var b = window.ga.getAll();
            if (b.length) {
                var c = new window.gaplugins.Linker(b[0]);
                return c.decorate(a);
            }
        }
        return a;
    },
    editCurrentLoginPopup = function () {
        var a = $('[id*="UserModalSignIn_UserModalPartEditLink"]');
        a.on("click", function () {
            setTimeout(function () {
                $(".ui-widget-overlay").on("click", function (a) {
                    a.preventDefault(), $('[id*="UserModalSignIn_UserModalPartDialog1"]').dialog("close");
                });
            });
        });
        var b = $('[aria-describedby$="UserModalSignIn_UserModalPartDialog1"]'),
            c = $(b).find(".ui-dialog-title.modal-title");
        $(c).html(LOGIN_TITLE);
        var d = $(b).find('[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_DivSignInContainer"]');
        $(d).prepend(LOGIN_DESCRIPTION);
        var e = $(b).find('[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_LinkbuttonRegisterDialog"]');
        $(e).text(REGISTER_NEW_ACCOUNT);
        var f = $(b).find('[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_TextboxUserName"]');
        e.insertAfter(f);
        var g = $(b).find('[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_LinkbuttonForgotPassword"]'),
            h = $(b).find('[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_TextboxPassword"]');
        g.insertAfter(h), $(b).find(".ui-dialog-buttonset button:first-child").css("display", "none");
    },
    passTextValue = function (a, b) {
        $(a).on("keyup", function () {
            $(b).val($(a).val());
        }),
            $(a).on("keydown", function (a) {
                if (13 == a.keyCode) return newLoginSubmit(a), !1;
            });
    },
    passClick = function (a, b) {
        $(a).on("change", function () {
            $(b).click();
        });
    },
    newLoginSubmit = function (a) {
        a.preventDefault();
        var b = Object.keys(window).filter(function (a) {
            return -1 !== a.indexOf("UserModalSignIn");
        });
        1 === b.length && window[b[0]].doEditSave();
    },
    createPopUp = function () {
        if (
            ($('[id*="UserModalSignedIn_UserModalPartEditLink"]').text($('[id*="UserModalSignedIn_UserModalPartEditLink"]').text().replace("|", "").trim()),
            "Sign in" === $('[id*="UserModalSignIn_UserModalPartEditLink"]').text().trim() &&
                (0 !== $('[id*="MembershipExpress"]').length || 0 !== $('[id*="divPriceList"]').length) &&
                "block" !== $('[aria-describedby$="UserModalSignIn_UserModalPartDialog1"]').css("display"))
        ) {
            var a = '\n    <div style="display: none;">\n      <div id="popuplogin" class="container ui-corner-all">\n        <div class="row row-eq-height">\n          <div id="popuploginformcontainer" class="col-xs-12 col-sm-8">\n            <h3>'
                .concat(MEMBER_SIGNIN, "</h3>\n            <p>")
                .concat(
                    MEMBER_DISCOUNT,
                    '</p>\n            <div id="popuploginform">\n              <div class="form-horizontal">\n                <div class="form-group">\n                  <label for="new-username" id="new-username-label" class="col-sm-12 control-label" style="padding-right:0">Email:</label>\n                  <div class="col-sm-12">\n                    <input name="new-username" type="text" id="new-username" class="BBFormTextbox LoginFormTextbox form-control">\n                    <a href="'
                )
                .concat(
                    cdl(REGISTERURL),
                    '" id="PC1953_ctl00_UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_LinkbuttonRegisterDialog" class="LoginLink" href="javascript:__doPostBack(\'PC1953$ctl00$UserModalSignIn$UserModalPartDialog1$UserModalPartDialogBody$LinkbuttonRegisterDialog\',\'\')">Register for new account</a>\n                  </div>\n                </div>\n                <div class="form-group">\n                  <label for="new-password" id="new-password-label" class="col-sm-12 control-label" style="padding-right:0">Password:</label>\n                  <div class="col-sm-12">\n                    <input name="new-password" type="password" id="new-password" class="BBFormTextbox LoginFormTextbox form-control">\n                    <a href="'
                )
                .concat(
                    cdl(FORGOTPASSWORDURL),
                    '" id="PC1953_ctl00_UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_LinkbuttonForgotPassword" class="LoginLink" href="#">Forgot your password?</a>\n                  </div>\n                </div>\n                <div class="form-group">\n                  <div class="col-sm-12">\n                    <div class="checkbox">\n                      <input id="new-checkbox" type="checkbox" name="new-checkbox">Remember me</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id="popupsubmitform" class="ui-dialog-buttonpane">\n              <button id="new-submit">\n                '
                )
                .concat(
                    SIGNIN_AND_CHECKOUT,
                    '\n              </button>\n            </div>\n          </div>\n          <div id="popuploginregister" class="col-xs-12 col-sm-4 ui-dialog-buttonpane">\n            <div class="join-container">\n              <p class="join-discount">'
                )
                .concat(JOIN_DISCOUNT, '</p>\n              <button id="join-button" onClick="window.location = \'')
                .concat(cdl(MEMBERSHIP_URL), "'\">\n                ")
                .concat(JOIN, '\n              </button>\n              <a id="checkoutguest" href="#">')
                .concat(GUEST, "</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ");
            $('[aria-describedby*="UserModalSignIn_UserModalPartDialog1"]').appendTo("form"),
                $(a).appendTo("form"),
                $("#new-submit").on("click", newLoginSubmit),
                passTextValue("#new-username", '[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_TextboxUserName"]'),
                passTextValue("#new-password", '[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_TextboxPassword"]'),
                passClick("#new-checkbox", '[id$="UserModalSignIn_UserModalPartDialog1_UserModalPartDialogBody_CheckboxRememberSignIn"]'),
                window.scrollTo(0, 0),
                $("#popuplogin").dialog({
                    title: null,
                    position: { my: "top", at: "center", of: ".site-header.row" },
                    draggable: !1,
                    modal: !0,
                    resizable: !1,
                    dialogClass: "newLogin",
                    open: function open() {
                        $(".ui-widget-overlay, #checkoutguest").on("click", function (a) {
                            a.preventDefault(), $("#popuplogin").dialog("close");
                        });
                    },
                });
        }
    },
    editFooter = function () {
        var a = $(".footer-left .address").html().replace("Ph. 615.356.8000", '<a href="tel:+16153568000">615.356.8000</a>');
        (a = "".concat(a, '  |  <a href="').concat(cdl(HOURS_URL), '">Hours</a>  |  <a href="').concat(cdl(TICKET_POLICY_URL), '">Ticket Policy</a>')),
            $(".footer-left .address").html(a),
            $(".footer-left .hours").css("display", "none"),
            $(".footer-left ul.nav li:last-child").before('<li><a target="_blank" href="'.concat(cdl(MEDIA_KIT_URL), '">media kit</a></li>')),
            $(".MS_background_footer .col-sm-5.col-xs-12").after(
                '\n    <div class="footer-sponsors-container" class="col-xs-12">\n      <ul class="footer-sponsors">\n        <li><span class="metro-arts"></span></li>\n        <li><span class="tn-arts"></span></li>\n      </ul>\n    </div>\n    <div class="col-xs-12">\n      <p class="copyright">\xA9'.concat(
                    new Date().getFullYear(),
                    " All Rights Reserved</p>\n    </div>\n  "
                )
            );
    },
    editHeader = function () {
        $('.col-sm-7.col-xs-12 img[alt="Cheekwood"]').click(function () {
            return (window.location = cdl(CHEEKWOOD_URL));
        });
        var a = $(".MS_background_header #nav").html().replace(/ /gi, "");
        $(".MS_background_header #nav").html(a),
            $(".MS_headerWrapper.MS_background_header").prepend(
                '\n    <div id="mobile-nav">\n      <div class="container">\n        <div id="mobile-menu-section" class="row">\n          <div class="col-sm-12">\n            <div class="mobile-logo"></div>\n            <button class="menu-mobile-button">\n            </button>\n          </div>\n        </div>\n        <div id="mobile-menu-items" class="row">\n          <div class="col-sm-12">\n            <div id="mobile-menu-buttons">\n            </div>\n          </div>\n          <div class="col-sm-12">\n            <div id="mobile-menu-links">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
            ),
            $('.col-sm-7.col-xs-12 img[alt="Cheekwood"]').clone(!0).appendTo(".mobile-logo"),
            $(".MS_LoginButtonInnerContainer.MS_LoginButtonInnerContainer_ExpandingPadding > div").clone(!0).appendTo("#mobile-menu-buttons");
        var b = $('[id$="LinkbuttonSignOut"]');
        0 < b.length && ($("#mobile-menu-buttons").addClass("signedin"), b.clone(!0).appendTo("#mobile-menu-buttons")),
            $("#mobile-menu-buttons a").addClass("btn-primary"),
            $("#nav a").clone(!0).appendTo("#mobile-menu-links"),
            $("button.menu-mobile-button").click(function (a) {
                a.preventDefault(),
                    $("button.menu-mobile-button")[0].className.includes("menu-mobile-open") ? $("button.menu-mobile-button").removeClass("menu-mobile-open") : $("button.menu-mobile-button").addClass("menu-mobile-open"),
                    $("#mobile-menu-items").slideToggle("fast");
            });
    },
    processSoldOut = function () {
        var a = $('[id$="labelEventAvailability"]').html(),
            b = a && -1 !== a.indexOf(SOLDOUT_KEY);
        b &&
            ($('.divMemberOnlyInfo, .Programming_Event_SoldOut, .Programming_Event_DateTime, [id$="htmlDisplayEventDescription"], #divPriceList, .BBFormButtonCell.form-group.clearfix').css("display", "none"),
            $('[id$="labelEventAvailability"]').html(a.replace(CALENDAR_KEY, '<a href="'.concat(cdl(CALENDAR_URL), '">').concat(CALENDAR_KEY, "</a>"))));
    },
    processShoppingCart = function () {
        $('[id$="CartGrid_lbRemoveAll"]').after('<span id="cartbuttonseparator"> </div>'),
            $(".PaymentPart_CartDescriptionCell h4").each(function (b, c) {
                var d = $(c).find("a");
                $(c).html(d.text()), d.text("Review or edit item"), $(c).after(d);
            });
        var a = $(".PaymentPart_CartItemDetails > div:nth-child(2)");
        a.text().includes(DISCOUNT_KEY) && (a.find(".cart-discount span:first-child").text("".concat(DISCOUNT_APPLIED, ": ")), a.addClass("cart-discount")),
            $(".cart-type-group").each(function (a, b) {
                var c = $(b).find(".row-grid-sub-heading").text().trim();
                0 === c.length &&
                    $(b).prepend(
                        '\n        <h2 class="PaymentPart_CartRows PaymentPart_CartItemTypeRow row show-grid row-grid-sub-heading">\n          <span colspan="6" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'.concat(
                            DISCOUNT_APPLIED,
                            "</span>\n        </h2>\n      "
                        )
                    );
            });
    },
    setFavicon = function () {
        var a = document.querySelector("link[rel*='ICON']") || document.createElement("link");
        (a.type = "image/x-icon"), (a.rel = "shortcut icon"), (a.href = "https://s3-us-west-1.amazonaws.com/www.socialgoodsoftware.com/cold-storage/cheekwood/favicon.jpg"), document.getElementsByTagName("head")[0].appendChild(a);
    };
editCurrentLoginPopup(), createPopUp(), editFooter(), editHeader(), processSoldOut(), processShoppingCart(), setFavicon();
$("[id*='CartGrid_ButtonUpdateCart']").css("margin-left", "15px");
$("#addldonheadcontainer").find("h4").html("I would like to help Keep Cheekwood Blooming with");
$("[id*='additionalDonationSection']").find("h2 span").html("Donations");
$("[id*='chkRegisterAnAccount']").parent().hide();
$("#divUseAsShipping").hide();
$("#divDeliveryMethod").hide();
