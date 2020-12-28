// document.querySelector('[editable]').addEventListener('click', handleClick);
document.body.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();

    const originalElement = event.target;

    if(!originalElement.hasAttribute('editable')) return;

    const type = originalElement.getAttribute('editable');
    const inputElement = document.createElement('input');
    originalElement.after(inputElement);
    inputElement.value = originalElement.innerText;
    inputElement.setAttribute('type', type);
    // inputElement.focus();
    inputElement.select();
    originalElement.remove();

    // inputElement.addEventListener('keydown');
    inputElement.addEventListener('keyup', function(event){
        console.log(event.key);
        switch(event.key){
            case 'Enter':
                inputElement.after(originalElement);
                originalElement.innerText = inputElement.value;
                inputElement.remove();
                 break;
            case 'Escape':
                inputElement.after(originalElement);
                inputElement.remove();
                 break;
        }
    })
}