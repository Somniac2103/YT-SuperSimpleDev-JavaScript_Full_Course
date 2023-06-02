function toggle(option)
  {
    const buttonSelected = document.querySelector(`.js-topic-button${option}`);
    
    if (!buttonSelected.classList.contains('is-toggled'))
      {
        const previousSelected = document.querySelector('.is-toggled');
        if (previousSelected)
        {
          previousSelected.classList.remove('is-toggled');
        }          
        buttonSelected.classList.add('is-toggled');  

      }
    else
      {
        buttonSelected.classList.remove('is-toggled');
      }
  }