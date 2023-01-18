
function openMenuBar(){
    document.querySelector('aside').className = 'active';
    document.getElementById('backdrop').className = 'activeBackdrop'
    console.log('openmenubar')
}
 function closeMenuBar(){
     document.querySelector('aside').className = '';
     document.getElementById('backdrop').className = 'inactivebackdrop';
     
     console.log('closemenubar')
}
// document.querySelector('close').onclick = e =>{
//     e.preventDefault();
//     closeMenuBar();
// }

document.getElementById('Menu').onclick = e=>{
    e.preventDefault()
    openMenuBar();
}

document.querySelector('button').onclick = e=>{
    e.preventDefault();
    closeMenuBar();
}

