const remove = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key='${index}']`).remove();
    // e.target.remove();
}

document.querySelectorAll(`button[data-key]`).forEach(item => item.addEventListener('click', remove))