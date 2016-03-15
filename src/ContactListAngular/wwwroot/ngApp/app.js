var ContactListAngular;
(function (ContactListAngular) {
    angular.module("ContactListAngular", []);
    var Contact = (function () {
        function Contact(name, phone, email) {
            this.name = name;
            this.phone = phone;
            this.email = email;
        }
        Contact.prototype.report = function () {
            return "Name: " + this.name + ", Phone: " + this.phone + ", Email: " + this.email;
        };
        return Contact;
    }());
    var contact1 = new Contact("James", "555-444-3333", "james@example.com");
    var contact2 = new Contact("Sarah", "555-433-4444", "sarah@example.com");
    var contact3 = new Contact("Lisa", "555-344-3333", "lisa@example.com");
    var HomeController = (function () {
        function HomeController() {
            this.contactList = [contact1, contact2, contact3];
        }
        return HomeController;
    }());
    angular.module("ContactListAngular")
        .controller("HomeController", HomeController);
    ////FILTER REFACTORY
    //function startsWith() {
    //    //Actual filter
    //    return function (input) {
    //        //input array of contacts
    //        //should output array of contacts where contact.name starts with expression
    //        return input;
    //    }      
    //}
    //angular.module("ContactListAngular").filter("startsWith", startsWith);
    var VideoController = (function () {
        function VideoController() {
            this.videos = ["Thor", "MidNight run", "Thor", "Heat", "Heat", "Cool Blue", "The Game", "Thor"];
        }
        return VideoController;
    }());
    angular.module("ContactListAngular").controller("VideoController", VideoController);
    function unique() {
        //Actual filter
        return function (input) {
            var uniqueElements = [];
            input.forEach(function (ele) {
                if (uniqueElements.every(function (uni) {
                    return ele !== uni;
                })) {
                    uniqueElements.push(ele);
                }
            });
            return uniqueElements;
        };
    }
    angular.module("ContactListAngular").filter("unique", unique);
})(ContactListAngular || (ContactListAngular = {}));
//# sourceMappingURL=app.js.map