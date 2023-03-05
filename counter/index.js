
    let count = 0;
    function increment(){
        count += 1;
        document.getElementById("count").innerText = count;
    }
    function decrement(){
        count -= 1;
        document.getElementById("count").innerText = count;
    }

    
    function save(){
        let previous_count = count + " -> "; 
        document.getElementById("save-el").textContent += previous_count;
        count = 0;
        document.getElementById("count").innerText = count;

    }
    function reset(){
        count = 0;
        document.getElementById("count").innerText = 0;
    }