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

(function tabs() {
    let tabs = document.querySelectorAll('.tabs');
    for (let tab of tabs) {
        let menuItems = tab.querySelectorAll('.menu li a');
        let activeTab = tab.querySelector('.menu .active');
        let tabBodies = tab.querySelectorAll('.body > div');

        let i = 1;
        for (let tabBody of tabBodies) {
            tabBody.id = tab.id + '-tab-' + i++;
        }

        i = 1;
        for (let menuItem of menuItems) {
            menuItem.href = "#" + tab.id + '-tab-' + i++;
            menuItem.addEventListener('click', function (event) {
                event.preventDefault();

                let menuActiveItem = tab.querySelector('.menu .active');

                if (menuActiveItem !== null) {
                    menuActiveItem.classList.remove('active');
                    tab.querySelector('.body > .show').classList.remove('show');

                }
                menuItem.classList.add('active');
                tab.querySelector(menuItem.getAttribute('href')).classList.add('show');
            })
        }
        if (activeTab !== null) {
            let activeBodyItem = tab.querySelector('.body ' + activeTab.getAttribute('href'));
            activeBodyItem.classList.add('show');
        }
    }
})();
