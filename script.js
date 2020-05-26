var ulSpisok = document.getElementById("list");
var inputText = document.querySelector("input[type='text']");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infaDev = document.getElementById("information");
var h3s = document.getElementsByTagName("h3");
var lishka = document.getElementsByTagName("li");


function DeleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        DeleteTodo();
    }
};

//addEventList - обработчик события с последующим вызовом функции, имеет по умолчанию 2 параметра

inputText.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        var now = document.createElement("h3");
        now = new Date();
        newSpan.innerHTML = 'Delete' + " " ; //добавить текст в span

        var newTodo = this.value  + "(date added:" + " " + now + ")"; //считывание текущего контента  в инпуте
        this.value = ''; //очищает инпут после добавления в него задачи
        
        if(newTodo ===  "(date added:" + " " + now + ")" ){
            newSpan.innerHTML = "";
            newLi = "";
        }
        else if(newTodo === "  " + "(date added:" + " " + now + ")" ){
            newSpan.innerHTML = "";
            newLi = "";
        }
        else if(newTodo === " " + "(date added:" + " " + now + ")" ){
            newSpan.innerHTML = "";
            newLi = "";
        }
        
    

        ulSpisok.appendChild(newLi).append(newSpan, newTodo);

        DeleteTodo();

    }
});


infaDev.addEventListener('click', function(){
    alert('Butter Brodsky');
})

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});
clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

DeleteTodo();

loadTodo();

