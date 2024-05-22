const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')){
        document.body.classList.remove('light')
    } else{
        document.body.classList.add('light')
    }
});