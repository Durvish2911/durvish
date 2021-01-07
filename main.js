var mouseEvent = "empty";//stores the 4 kinds of mouseEvents


    canvas = document.getElementById('my_canvas');//stores the canvas elements
    ctx = canvas.getContext("2d");//draws 2d structures on canvas
    
    color = "black";
    width_of_line = 1;
    console.log("muhahahahah")

    //1st mouseEvent-mouseDown
    canvas.addEventListener("mousedown", my_mousedown);//works like OnEvent
    function my_mousedown(e)//function works when mouse is clicked on canvas
    {
        color=document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        mouseEvent = "mouseDown";
    }

//2nd mouseEvent-mousemove
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)//function works when mouse is moved on canvas
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;//stores new x position of mouse
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;//stores new y position of mouse

//drawing will only take place when mouse is clicked and moved on canvas
        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width_of_line;
        //line will be drawn between old position and new position using moveTo and lineTo functions
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,70,0,2*Math.PI);
        ctx.stroke();
        }
    }

//3rd mouseEvent-mouseUP
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)//function works when mouse clicked is stopped on the canvas
    {
        mouseEvent = "mouseup";
    }

////4th mouseEvent-mouseleave
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e)//function works when mouse goes out of canvas
    {
        mouseEvent = "mouseleave";
    }



function clear_canvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}