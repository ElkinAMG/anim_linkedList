window.onload = function ()
{

        add = document.getElementById('add');
        remove = document.getElementById('remove');
        data = document.getElementById('t_box');

        add.onclick = function(){
                alert(`You have pressed ${add.type} with name ${add.name}`);
        }

        remove.onclick = function(){
                alert(`You have pressed ${remove.type} with name ${remove.name}`);
        }

        data.style.display = "none";
}
