const form = document.querySelector('.login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.email.value);
    // console.log(e.currentTarget.elements.password.value);
    const { elements: {
        email, password } } = e.currentTarget;
    if (email.value === '' || password.value=== '') {
        return alert('Все поля должны быть заполнены!')
    }
    console.log({
        email: email.value,
        password: password.value
    });
    e.currentTarget.reset();
});


    

