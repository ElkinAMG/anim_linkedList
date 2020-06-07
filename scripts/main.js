function createNode(a_box, data)
{
        if (typeof createNode.clicks == 'undefined' || createNode.clicks == 0)
        {
                data.style.visibility = "visible";
                data.style.opacity = "1";
                createNode.clicks = 1;
                return;
        }

        if (createNode.clicks > 0)
        {
                node = document.createElement("p");


                arrow = document.createElement("div")
                arrow.setAttribute("id", "arrow")
                arrow.appendChild(document.createElement("div"))
                arrow.children[0].setAttribute("id", "stick")
                arrow.appendChild(document.createElement("div"))
                arrow.children[1].setAttribute("id", "point")

                if (data.value.length > 0)
                {
                        node.appendChild(document.createTextNode(data.value));
                        node.setAttribute("class", "node");

                        a_box.appendChild(node);
                        a_box.appendChild(arrow);

                        node.style.opacity = "1";
                        arrow.style.opacity = "1";

                        createNode.clicks = 0;

                        data.value = "";
                        data.style.opacity = "0";
                        data.style.visibility = "hidden";
                }
                else
                {
                        alert("Please enter a valid value");
                }
        }
}

function deleteNode(a_box)
{
        a_box.children[1].style.opacity = 0;
        a_box.children[0].style.opacity = 0;

        setTimeout(function(){
                a_box.removeChild(a_box.children[1]);
                a_box.removeChild(a_box.children[0]);
        }, 505)
}

window.onload = function ()
{

        add = document.getElementById('add');
        remove = document.getElementById('remove');
        data = document.getElementById('t_box');
        box = document.getElementById('list');

        add.onclick = function(){
                createNode(box, data);
        }

        remove.onclick = function(){
                deleteNode(box);
        }

}
