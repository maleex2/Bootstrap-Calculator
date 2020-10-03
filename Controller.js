let view = new View(),
    model = new Model(),
    controller = null;



function Controller() {


    this.init = function() {
    view.getCurr();
    model.fetchData();

        document.getElementById("eval").addEventListener("click", function(){
            let home = view.sendHome();
            console.log("home is",home);
            let visit = view.sendVisit();
            let value = view.sendValue();
            let homeCurr = model.getRate(home);
            let visitCurr = model.getRate(visit);
            let calculated = model.calc(value,homeCurr,visitCurr);
            view.updateValue(calculated);
            view.saveCurr();
        });
    };
}

controller = new Controller();
window.addEventListener("load", controller.init);

