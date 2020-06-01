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
                node.appendChild(document.createTextNode(data.value));
                node.setAttribute("class", "node");

                a_box.appendChild(node);

                createNode.clicks = 0;

                data.value = "";
                data.style.opacity = "0";
                data.style.visibility = "hidden";
        }
}

function deleteNode(a_box)
{
        /*setTimeout(function() {
                a_box.removeChild(a_box.children[0])
        }, 500);*/

        a_box.removeChild(a_box.children[0])
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
