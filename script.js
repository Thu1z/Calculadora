function insert(num) {
    var tela = document.getElementById('input').value += num;
}

function clean(){
    tela = document.getElementById('input').value = '';
}
function back(){
    tela = document.getElementById('input').value; 
    document.getElementById('input').value = tela.substring(0, tela.length -1);
}

function calcular(){
    tela = document.getElementById('input').value;
    if (tela){
        document.getElementById('input').value = eval(tela);
    }

}