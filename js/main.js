(function formInputsMain() {
    let formInputs = document.querySelectorAll('.form-input');

    for (let formInput of formInputs) {
        let inputs = formInput.querySelectorAll('input, textarea');

        for (let input of inputs) {
            input.addEventListener('change', function () {
                checkInputValue(formInput, input);
            });

            window.addEventListener('load', function () {
                checkInputValue(formInput, input);
            });
        }
    }

    function checkInputValue(formInput, input) {
        if (input.value !== '') {
            formInput.classList.add('not-empty-input');
        } else {
            formInput.classList.remove('not-empty-input');
        }
    }

})();


(function alertsDismissable() {
    let alerts = document.querySelectorAll('.alert.alert-dismissable');
    for (let alert of alerts) {
        alert.insertAdjacentHTML('beforeend', '<button type="button" class="close">&times;</button>');
        let closeBtn = alert.querySelector('.close');
        closeBtn.addEventListener('click', function () {
            alert.className += ' alert-dismissed';
            setInterval(function () {
                alert.style.display = 'none';
            }, 300);
        });
    }

})();

