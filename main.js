$(document).ready(function() {
    $(".menu").click(function() {
        $("nav").slideToggle();
    })
})

//slideshow
var hinh=[
    'images/tour.jpg',
    'images/tour1.jpg',
    'images/tour2.jpg',
];
var index=0;
function prev() {
    index--;
    if(index<0) index=hinh.length-1;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1598d4';
}
function next() {
    index++;
    if(index==hinh.length) index=0;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1598d4';
}
setInterval('next()',2000);

//header
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click',function() {
    root.style.setProperty('--color2', '#04AA6D');
    localStorage.setItem('pickColor','#04AA6D');
})
c2.addEventListener('click',function() {
    root.style.setProperty('--color2', '#FED766');
    localStorage.setItem('pickColor','#FED766');
})
c3.addEventListener('click',function() {
    root.style.setProperty('--color2', '#00E8FC');
    localStorage.setItem('pickColor','#00E8FC');
})
function loadTheme() {
    if (localStorage.getItem('pickColor') != '') {
        root.style.setProperty('--color2',localStorage.getItem('pickColor'));
    }
}

//đăng ký/đăng nhập
function register() {
    const username = document.getElementById("inputUser").value;
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPass").value;
    const cfpassword = document.getElementById("inputctPass").value;
    
    if (username && email && password && cfpassword) {
      if (password === cfpassword) {
        const userInfo = {
          username: username,
          email: email,
          password: password
        };
        
        // Lưu thông tin vào localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        
        alert("Đăng kí thành công!");
      } else {
        alert("Mật khẩu không khớp!");
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  }