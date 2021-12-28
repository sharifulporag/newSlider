
document.querySelector('#btn').addEventListener('click',function(){
   
    

    if(document.querySelectorAll('.panel')[0].classList.contains('active')) {
        document.querySelectorAll('.panel')[1].classList.add('active')
        document.querySelectorAll('.panel')[0].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[1].classList.contains('active')) {
        document.querySelectorAll('.panel')[2].classList.add('active')
        document.querySelectorAll('.panel')[1].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[2].classList.contains('active')) {
        document.querySelectorAll('.panel')[3].classList.add('active')
        document.querySelectorAll('.panel')[2].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[3].classList.contains('active')) {
        document.querySelectorAll('.panel')[4].classList.add('active')
        document.querySelectorAll('.panel')[3].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[4].classList.contains('active')) {
        document.querySelectorAll('.panel')[0].classList.add('active')
        document.querySelectorAll('.panel')[4].classList.remove('active')
    }



})






setInterval(function(){
    if(document.querySelectorAll('.panel')[0].classList.contains('active')) {
        document.querySelectorAll('.panel')[1].classList.add('active')
        document.querySelectorAll('.panel')[0].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[1].classList.contains('active')) {
        document.querySelectorAll('.panel')[2].classList.add('active')
        document.querySelectorAll('.panel')[1].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[2].classList.contains('active')) {
        document.querySelectorAll('.panel')[3].classList.add('active')
        document.querySelectorAll('.panel')[2].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[3].classList.contains('active')) {
        document.querySelectorAll('.panel')[4].classList.add('active')
        document.querySelectorAll('.panel')[3].classList.remove('active')
    }else if(document.querySelectorAll('.panel')[4].classList.contains('active')) {
        document.querySelectorAll('.panel')[0].classList.add('active')
        document.querySelectorAll('.panel')[4].classList.remove('active')
    }
    
},6000)
