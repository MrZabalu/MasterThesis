"use strict";
var TcHmi;
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Beckhoff;
        (function (Beckhoff) {
            /**
             * Sets if the system keyboard should open on focus of a textarea or input element.
             */
            function SetAutoOpenSystemKeyboard(autoOpenSystemKeyboard) {
                TcHmi.Keyboard.setAutoOpen(autoOpenSystemKeyboard);
            }
            Beckhoff.SetAutoOpenSystemKeyboard = SetAutoOpenSystemKeyboard;
        })(Beckhoff = Functions.Beckhoff || (Functions.Beckhoff = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('SetAutoOpenSystemKeyboard', 'TcHmi.Functions.Beckhoff', TcHmi.Functions.Beckhoff.SetAutoOpenSystemKeyboard);
//# sourceMappingURL=SetAutoOpenSystemKeyboard.js.map