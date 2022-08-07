class Tarea {
    constructor(task, date){
        this.task = task;
        this.date = date;
    }
}

class UI {
    add_task(tarea_p) {

       const task_list= document.getElementById('task_list');
       const element = document.createElement('div');
       element.innerHTML =`
          <div class="task_card">
                <div class="cuenta_r">
                    <div class="dias">00</div>
                    <div class="dias_t">dias</div>
                </div>
                <div class="task_txt">
                    ${tarea_p.task}
                </div>
                <div class="btn_cx">
                    <div class="btn_c"><i class="fa-solid fa-check" id="check"></i></div>
                </div>   
          </div>
       `;
       task_list.appendChild(element);
    }

    resetForm(){
        document.getElementById('task_form').reset();
    }

    completTask(element){
        if(element.id === 'check'){
            const el1 = element.parentElement.parentElement.parentElement.parentElement;
            el1.innerHTML =`<div class="completado">COMPLETED</div>`
            setTimeout(()=>{
                el1.remove()
            }, 10000);
        }
    }

    show_message(){

    }

    
}

// DOM

document.getElementById('task_form')
.addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    const date = document.getElementById('date').value;

    const tarea_p = new Tarea(task,date);
    
    const ui = new UI();
    ui.add_task(tarea_p);
    ui.resetForm();
    
    e.preventDefault();
});

document.getElementById('task_list').addEventListener('click', function(e){
    const ui = new UI();
    ui.completTask(e.target);
});

// reloj 

const $tiempo = document.querySelector('.tiempo'),
        $fecha = document.querySelector('.fecha');
        
        function digitalClock(){
            let f = new Date(),
            dia = f.getDate(),
            mes = f.getMonth() + 1,
            anio = f.getFullYear(),
            diaSemana = f.getDay();

            dia = ('0' + dia).slice(-2);
            mes = ('0' + mes).slice(-2)

            let timeString = f.toLocaleTimeString();
            $tiempo.innerHTML = timeString;

            let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
            let showSemana = (semana[diaSemana]);
            $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
        }
        
        setInterval(() => {
            digitalClock()
        }, 1000);