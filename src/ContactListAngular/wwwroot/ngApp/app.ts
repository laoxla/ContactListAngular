
namespace ContactListAngular {
    angular.module("ContactListAngular", []);

    class Contact {

        constructor(public name: string, public phone: string, public email: string) { }
        report() {
            return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
        }

    }
    let contact1 = new Contact("James", "555-444-3333", "james@example.com");
    let contact2 = new Contact("Sarah", "555-433-4444", "sarah@example.com");
    let contact3 = new Contact("Lisa", "555-344-3333", "lisa@example.com");


    class HomeController {

        public contactList = [contact1, contact2, contact3];

    }

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



    class VideoController {

        public videos = ["Thor", "MidNight run", "Thor", "Heat", "Heat", "Cool Blue", "The Game", "Thor"]
    }

    angular.module("ContactListAngular").controller("VideoController", VideoController);

    function unique() {
        //Actual filter
        return function (input) {

            let uniqueElements = [];
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
}

