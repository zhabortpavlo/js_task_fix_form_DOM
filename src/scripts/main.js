'use strict';

// write code here
document.querySelectorAll('form').forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const name = input.name;
    const id = input.id;

    if (!name || !id) return; 

    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', id);
    label.textContent = name;

    input.placeholder = name.charAt(0).toUpperCase() + name.slice(1);

    const parent = input.parentElement;
    parent.insertBefore(label, input);
  });
});
