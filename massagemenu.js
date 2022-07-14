class Spa{
    constructor(product, service) {
        this.product = product;
        this.service = service;
    }
    //This makes a pizza and  what kind of topping they want
    describe() {
        return `${this.product} plays ${this.service}.`;
    }
}
//this is going to show all the sauces the user can put on their pizza 
class Massage {
    constructor(name) {
        this.product = product;
        this.service = [];
    } 
        //This makes sure the user only puts in items the resturant provides
    addService(service) {
        if (service instanceof product) {
            this.services.push(service);
        } else {
            throw new Error( `You can only add an instance of services available. Argument is not a service: ${service} `);
        }
    }

    describe() { 
        return `${this.product} has $${this.services.length} service.`;
    }
}
// We're making methods that we need to define later
class Menu {
     constructor() {
        this.option = [];
        this.selected = null;
     }
     
     start() {
        let selection = this.showMainMenuOptions();
        while(selection !=0) {
            switch(selection) {
                       case `1`:
                        this.chooseService();
                        break;
                        case `2`:
                        this.viewService();
                        break;
                        case `3`:
                        this.deleteService();
                        break;
                        case `4`:
                        this.displayervice();
                        break;
                 default:
                 selection = 0
            }

            selection = this.showMainMenuOptions();
        }
        alert (`Good day!`);
     }


//This is our method to show the menu options, allowng the user to select an option
     showMainMenuOptions () { 
        return prompt(`
        0) exit
        1) choose service
        2) view service
        3) delete service
        4) display all services
        `); 
     }


     showMassageMenuOptions(massageInfo) {
        return prompt(`
        0) back
        1) choose massage
        2) delete massage
     --------------------------------
     ${massageInfo}   
        `)
     }

     displayMassages() {
        let massageString = '';
        for (let i = 0 ; i < this.massages.length; i++) {
            massageString += i + `) ` + this.massages[i].service + `/n`;
        }
        alert(teamString);
     }
    
    chooseService() {
        let product = prompt(`Enter name of the service:`);
        this.massages.push( new Massage(product));
     } 
//we're defining the methods here
     viewService(){
        let =  prompt('Enter the index of the service you wish to view');
        if (index > -1 && index < this.service.length) {
            this.selectedMassage = this.service[index];
            let description = 'Massage Service:' + this.selectedMassage.product + '\n';
          
            for (let i = 0; i < this.selectedMassage.services.length; i++) {
                description += i + ') ' + this.selectedMassage.services.length[i].name + ' - '
                + this.selectedMassage.services[i].service + '\n';
            }
             let selection = this.showMainMenuOptions(description);
             switch(selection) {
                case '1':
                    this.chooseService();
                    break;
                    case '2':
                        this.deleteService();
                        
             }
        }
     }
}

let menu = new Menu();
menu.start()