// function for event listeners

function eventListeners(){
    // hide preloader after page has been loaded
    const ui = new UI()
    
    window.addEventListener('load',function(){
        ui.hidePreloader();
    })
    
    // // navigation button
    
    document.querySelector('.navBtn').addEventListener('click',function(){
        ui.showNav();
    })  

    document.querySelector('.contact-form').addEventListener('submit',function(event){

        event.preventDefault();

        const name =document.querySelector('.input-name').value;
        const lastname =document.querySelector('.input-lastname').value;
        const email =document.querySelector('.input-email').value;
        const projectdetails =document.querySelector('.input-projectdetails').value;



        let value = ui.checkEmpty(name,lastname,email,projectdetails);

        if(value){
            ui.showFeedback('Thank you for Contacting. I will get back to you Soon','success')
        }
        else{
            ui.showFeedback('some form values are empty','error')
        }

    })
    }
    
    eventListeners();
    
    // Constructor 
    
    function UI(){
    
    }
    
    UI.prototype.hidePreloader = function(){
        document.querySelector('.preloader').style.display="none";
    }
    
    UI.prototype.showNav = function(){
        document.querySelector('.nav').classList.toggle('nav_show');
    }
    

    UI.prototype.checkEmpty = function(name,lastname,email,projectdetails){
        let result;
        if(name === ''||lastname===''||email===''||projectdetails===''){
            result = false;
        }
        else{
            result=true;
        }
        return result;
    }

    UI.prototype.showFeedback = function(text,type){
        if(type==='success'){
            let feedback = document.querySelector('.contact-form-feedback');
            feedback.classList.add('success')
            feedback.innerText = text;
            this.removeAlert('success');
        }
        else if(type === 'error'){
            let feedback = document.querySelector('.contact-form-feedback');
            feedback.classList.add('error')
            feedback.innerText = text;
            this.removeAlert('error');
        }
    }
 UI.prototype.removeAlert=function(type){
        setTimeout(function(){
        document.querySelector('.contact-form-feedback').classList.remove(type)
    },2000)}
    
    
       