

function sidebar(){
    document.querySelector('div').className = 'sideBarActive'
    console.log('function has been called');
}

const bgchange = document.getElementById('menubar');
bgchange.onclick = e=>{
    e.preventDefault();
    sidebar();
}