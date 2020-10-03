function View() {

    let home = document.getElementById("home").value;
    let visit = document.getElementById("visiting").value;
    let fee = document.getElementById("fee").value;

    this.saveCurr = function(){
        home = document.getElementById("home").value;
        visit = document.getElementById("visiting").value;
        fee = document.getElementById("fee").value;
        window.localStorage.setItem('homeCurr', home);
        window.localStorage.setItem('visitCurr', visit);
        window.localStorage.setItem('fee', fee);
        let check = window.localStorage.getItem('homeCurr');
    };


    this.getCurr = function(){
        if(window.localStorage.getItem('fee') !== null){
            document.getElementById("fee").value = window.localStorage.getItem('fee');
        }
        if(window.localStorage.getItem('homeCurr') !== null) {
            document.getElementById("home").value = window.localStorage.getItem('homeCurr');
        }
        if(window.localStorage.getItem('visitCurr') !== null) {
            document.getElementById("visiting").value = window.localStorage.getItem('visitCurr');
        }
    };

    this.sendHome = function(){
            return document.getElementById("home").value;
    };
    this.sendVisit = function(){
            return document.getElementById("visiting").value;
    };
    this.sendValue = function () {
             return document.getElementById("input").value;
    };
    this.updateValue = function(number) {
        document.getElementById("input").value = number;
    };

    this.getFeeValue = function(){
        return document.getElementById("fee").value;
    }

    }

function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

