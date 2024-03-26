class login{
    constructor(felhasz, jelsz){
        this.felhasz = felhasz;
        this.jelsz = jelsz;
    }
}


document.getElementById('login').addEventListener('click', function(){
    let felhaszn = document.getElementById('userN').value;
    let jelszo = document.getElementById('passWD').value;

    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let res_text = xhttp.responseText;
        let users = get_users(res_text);

        for(let i = 0; i < users.length; i++){
            if(users[i].felhasz === felhaszn && users[i].jelsz === jelszo){
                document.getElementById('log_in')
            }
        }
    }

})