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
        function VideoController(ContactManagerService) {
            this.ContactManagerService = ContactManagerService;
            this.videos = ["Thor", "MidNight run", "Thor", "Heat", "Heat", "Cool Blue", "The Game", "Thor"];
        }
        Object.defineProperty(VideoController.prototype, "contacts", {
            get: function () {
                return this.ContactManagerService.contacts;
            },
            enumerable: true,
            configurable: true
        });
        return VideoController;
    }());
    angular.module("ContactListAngular").controller("VideoController", VideoController);
    function unique() {
        //Actual filter
        return function (input, key) {
            var uniqueElements = [];
            input.forEach(function (ele) {
                if (uniqueElements.every(function (uni) {
                    return ele[key] !== uni[key];
                })) {
                    uniqueElements.push(ele);
                }
            });
            return uniqueElements;
        };
    }
    angular.module("ContactListAngular").filter("unique", unique);
    var ContactManagerService = (function () {
        function ContactManagerService() {
            this.contacts = [];
        }
        ContactManagerService.prototype.addContact = function (name, phone, email) {
            this.contacts.push(new Contact(name, phone, email));
        };
        return ContactManagerService;
    }());
    angular.module("ContactListAngular").service("ContactManagerService", ContactManagerService);
})(ContactListAngular || (ContactListAngular = {}));
//# sourceMappingURL=app.js.map