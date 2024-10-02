"use strict";
var TcHmi;
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Beckhoff;
        (function (Beckhoff) {
            /**
             * Gets if the system keyboard should open on focus of a textarea or input element.
             */
            function GetAutoOpenSystemKeyboard() {
                return TcHmi.Keyboard.getAutoOpen();
            }
            Beckhoff.GetAutoOpenSystemKeyboard = GetAutoOpenSystemKeyboard;
        })(Beckhoff = Functions.Beckhoff || (Functions.Beckhoff = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('GetAutoOpenSystemKeyboard', 'TcHmi.Functions.Beckhoff', TcHmi.Functions.Beckhoff.GetAutoOpenSystemKeyboard);
//# sourceMappingURL=GetAutoOpenSystemKeyboard.js.map