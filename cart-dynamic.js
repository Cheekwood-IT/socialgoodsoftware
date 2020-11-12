$("[id*='CartGrid_ButtonUpdateCart']").css("margin-left", "15px");
$("[id*='chkRegisterAnAccount']").parent().hide();
$("#divUseAsShipping").hide();
$("#divDeliveryMethod").hide();

$('[id$="CartGrid_lbRemoveAll"]').after('<span id="cartbuttonseparator"> </div>'),
    $(".PaymentPart_CartDescriptionCell h4").each(function (b, c) {
        var d = $(c).find("a");
        $(c).html(d.text()), d.text("Review or edit item"), $(c).after(d);
    });
