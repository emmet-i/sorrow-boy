function show_projects(){
    var x=document.getElementsByClassName('hidden');
    // var y=document.getElementsByClassName('all-projects')[0]
    if(x[0].style.display=="none"){
        for(let i = 0; i<x.length;i++){
            x[i].style.display="block";
        }
        this.value="Show Less";
    }
    else{
        for(let i = 0; i<x.length;i++){
            x[i].style.display="none";
        }
        this.value="All Projects"
    }
}

function send_mail(){
    var link="mailto:ramanandrama8@gmail.com"+"?cc=ramanand5998@gmail.com";
    window.location.href=link;
}