"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //Spread Operator
    // Rest Operator
    //Destructuring
    var bros = ['mirza', 'Firoz'];
    var bros1 = ["tanmay", "rahat"];
    bros.push.apply(bros, bros1);
    var mentors1 = {
        typescript: "mezba",
        redux: "mir",
        dbms: "mizan"
    };
    var mentors2 = {
        prisma: 'firoz',
        next: "tanmay",
        cloud: "Nahid"
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    //Rest Operator
    var greetFriends = function () {
        // console.log(`Hi ${friend1}`)
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("hi ".concat(friend)); });
    };
    greetFriends("abul", "babul", "kabul", "bubul");
}
