const sideMenu = document.getElementById("page-wrapper-left");
const menuToggle = document.getElementById("side-menu-toogler")

/**
 * Adding event listener
 */
menuToggle.addEventListener("click", (event) => {
    if (!sideMenu) {
        return;
    }
    tooggleMenu();
})

/**
 * For toogling the menu
 */
const tooggleMenu = () => {
    if (sideMenu.classList.contains("show")) {
        sideMenu.classList.remove("show");
    } else {
        sideMenu.classList.add("show");
    }
};


/**
 * Class in charge of handing http calls
 * It support get, delete, post, put
 */
class ApiCaller {
    _http = new XMLHttpRequest();
    _apiAddress = 'https://api.quickcredit.com';
    _address = "";
    /**
     * Constructor
     */
    constructor(address){
        this._address = address;
    }
    /**
     * 
     * @param {*} address 
     */
    GET() {
        this._http.setRequestHeader('Content-type', 'application/json');
        this._http.open("GET", (this._apiAddress + this._address));
        this._http.send();
        this.respondToUser();
    }
      /**
     * 
     * @param {*} address 
     */
    DELETE(data) {
        this._http.open("DELETE", (this._apiAddress + this._address));
        this._http.send(data);
        this.respondToUser();
    }
    /**
     * 
     * @param {*} address 
     */
    POST(data) {
        this._http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this._http.open("POST", (this._apiAddress + this._address));
        this._http.send(data);
        this.respondToUser();
    }
    /**
     * 
     * @param {*} address 
     */
    PUT(data) {
        this._http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this._http.open("PUT", (this._apiAddress + this._address));
        this._http.send(data);
        this.respondToUser();
    }

    /**
     * Repsonds to the user according to a certain request
     */
    respondToUser() {
        return new new Promise((resolve, reject) => {
            this._http.onreadystatechange = (e) => {
                if (this._http.readyState == 4 && this._http.status == 200) {
                    resolve(e);
                } else {
                    reject(e)
                }
            }
        });
    }
}


// 
// 
// Models to call
class User{

}