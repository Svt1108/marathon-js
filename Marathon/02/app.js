const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder,.placeholderStart');


let itemT;

document.addEventListener( 'dragstart', (e) => {

 for (let item of items)
 {
     if (e.composedPath().includes(item)) {itemT = item; dragstart(e)}
 }


itemT.addEventListener('dragend', dragend)


placeholders.forEach((placeholder) => 
{
placeholder.addEventListener('dragenter', dragenter)
placeholder.addEventListener('dragover', dragover)
placeholder.addEventListener('dragleave', dragleave)
placeholder.addEventListener('drop', dragdrop)
})


function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)   
    }

function dragend(event) {
    event.target.classList.remove('hide', 'hold')
    // setTimeout(() => event.target.classList.remove('hold'), 2000);
 }
 
 function dragenter(event) {
    if(event.target.classList.contains('back')){
    event.target.classList.add('hovered')}
 }
 
 function dragover(event) {
   event.preventDefault()  
 }

 function dragleave(event) {
    event.target.classList.remove('hovered')
 }


 function dragdrop(event) {
    
    if(event.target.classList.contains('back')){ 
    event.target.append(itemT)
      }
      event.target.classList.remove('hovered')
   }
 
});

