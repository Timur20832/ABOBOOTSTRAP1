document.getElementById('param-1').oninput = function () {
 document.getElementById('password-length').innerHTML = this.value;
}
let result;
let par1;
let par2;
let par3;
let par4;
let par5;
function generate() {
    const y = document.getElementsByName('name1')[0].value.replace(".");
    const m = document.getElementsByName('name2')[0].value;
    const z = document.getElementsByName('name3')[0].value;
    const k = document.getElementsByName('name4')[0].value;
    const c = document.getElementsByName('name5')[0].value;
    var passLength = parseInt(document.getElementById('param-1').value);
    var rs = "";    var rk = "";  var rj = "";  var ry ="";  var ru = ""; 
    var lelte =document.getElementById('out').value ;
    result = y+m+k+z+c;
    par1 = y+m;
    par2 = z+m+k;
    par3 = y+c;
    par4 = y+m+c;
    par5 = result;
   // if (lelte = ''){
            if (y != "" && m != "" && k != "" && c != "" && z != "") {
                while (rs.length < passLength) {
                    rs +=   par1[Math.floor(Math.random() * passLength)];
                    }
                //console.log(rs);
                while (rk.length < passLength) {
                    rk +=   par2[Math.floor(Math.random() * passLength)];
                    }
                //console.log(rk);
                while (rj.length < passLength) {
                    rj +=   par3[Math.floor(Math.random() * passLength)];
                    }
            //console.log(rj)
                while (ry.length < passLength) {
                    ry +=   par4[Math.floor(Math.random() * passLength)];
                    }
            //console.log(ry);
                while (ru.length < passLength) {
                    ru +=   par5[Math.floor(Math.random() * passLength)];
                    }
                //console.log(ru);
                document.getElementById('out').innerHTML += '<p>' + rs + '</p>';
                document.getElementById('out').innerHTML += '<p>' + rk + '</p>';
                document.getElementById('out').innerHTML += '<p>' + rj + '</p>';
                document.getElementById('out').innerHTML += '<p>' + ry + '</p>';
                document.getElementById('out').innerHTML += '<p>' + ru + '</p>';
                } else{
                    document.getElementById('out').innerHTML += '<p>' + 'вы не заполнили все поля' + '</p>';

                }
  
/*}else{
    document.getElementById('out').innerHTML = '';
}*/
}

