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

// Google Analytics
("use strict");
var getTextFromJQueryNodes = function (a) {
        var b = [];
        return (
            a.each(function (a, c) {
                return !!c && b.push(c.textContent.trim());
            }),
            b
        );
    },
    getNumericPartFromString = function (a) {
        return a.replace(/[^\d\.]*/g, "");
    },
    getFloatsFromJQueryNodes = function (a) {
        return getTextFromJQueryNodes(a).map(function (a) {
            return parseFloat(getNumericPartFromString(a));
        });
    },
    pushDataLayer = function (a) {
        if (!dataLayer) return void console.warn('"dataLayer" object not loaded');
        if (!a || 0 === a.length) return void console.info("There's no products to add on dataLayer");
        var b = { ecommerce: { event: "gtm.productImpression", currencyCode: "USD", impressions: a } };
        (window.memberships = b), dataLayer.push(b);
    },
    processMembershipPage = function () {
        var a = getTextFromJQueryNodes($(".BBListingHeading > h1"))[0],
            b = getTextFromJQueryNodes($(".BBListingHeading.MembershipExpress_MembershipSelectTitle"))[0];
        b = "".concat(b, "s");
        var c = $(".MembershipExpress_TermName.level-inner-box");
        if (0 < c.length) {
            var d = [];
            c.each(function (c, e) {
                var f = $(e),
                    g = getTextFromJQueryNodes(f.find(".MembershipExpress_TermRadioLevel"))[0],
                    h = getTextFromJQueryNodes(f.find(".MembershipExpress_TermRadiolTerm.level-inner-box-heading"))[0],
                    i = getFloatsFromJQueryNodes(f.find(".MembershipExpress_TermRadioAmount.level-amount"))[0];
                d.push({ category: b, name: a, Level: g, Term: h, price: i, position: c });
            }),
                pushDataLayer(d);
        }
    },
    processDonationsPage = function () {
        pushDataLayer([{ category: "Donations", name: "Donations", position: 0, quantity: 1 }]);
    },
    processEventPage = function () {
        var a = getTextFromJQueryNodes($(".BBListingHeading > h1"))[0],
            b = $('[id*="labelEventDate"]'),
            c = null,
            d = null;
        if (0 < b.length) {
            var e = getTextFromJQueryNodes(b)[0],
                f = getTextFromJQueryNodes($('[id*="labelEventStartTime"]'))[0],
                g = new Date("".concat(e, " ").concat(new Date().getFullYear()));
            (d = g.format("yyyy-MM-dd")), (c = "".concat(g.format("dddd, MMMM dd, yyyy"), " ").concat(f));
        }
        var h = $(".Programming_Event_PriceList .show-grid > .row");
        if (0 < h.length) {
            var i = [];
            h.each(function (b, e) {
                var f = $(e),
                    g = getTextFromJQueryNodes(f.find("label.listPrice"))[0],
                    h = getFloatsFromJQueryNodes(f.find("span.Programming_TicketPriceValue"))[0],
                    j = { category: "Tickets", name: "".concat(a, " - ").concat(g), price: h, position: b };
                !c || (j.details = c), !d || (j.date = d), i.push(j);
            }),
                pushDataLayer(i);
        }
    },
    ppc = function () {
        return $ && "function" == typeof $
            ? void (0 < $('[id*="MembershipExpress"]').length
                  ? processMembershipPage()
                  : 0 < $(".Programming_Event_DateTime").length
                  ? processEventPage()
                  : 0 < $('[id*="panelDailyAdmission"]').length
                  ? processEventPage()
                  : 0 < $(".listDonationDisplay").length && processDonationsPage())
            : void console.warn("jQuery does not exists!");
    };
ppc();

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
    JOIN_DISCOUNT = "Join Cheekwood today and get a discount on your ticket order.",
    JOIN = "Join Cheekwood",
    GUEST = "Check Out as Guest",
    SOLDOUT_KEY = "Online Tickets are sold out",
    CALENDAR_KEY = "calendar page",
    CALENDAR_URL = "https://cheekwood.org/calendar/",
    MEMBERSHIP_URL = "https://3892.blackbaudhosting.com/3892/Basic-Membership",
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
        a.text().includes(DISCOUNT_KEY) && (a.find("span:first-child").text("".concat(DISCOUNT_APPLIED, ": ")), a.addClass("cart-discount")),
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
