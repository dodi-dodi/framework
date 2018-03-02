'use strict';

// form
(function formInputsMain() {
    var formInputs = document.querySelectorAll('.form-input');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var formInput = _step.value;

            var inputs = formInput.querySelectorAll('input, textarea');

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                var _loop2 = function _loop2() {
                    var input = _step2.value;

                    input.addEventListener('change', function () {
                        checkInputValue(formInput, input);
                    });

                    window.addEventListener('load', function () {
                        checkInputValue(formInput, input);
                    });
                };

                for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    _loop2();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        };

        for (var _iterator = formInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
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

// alert
(function alertsDismissable() {
    var alerts = document.querySelectorAll('.alert.alert-dismissable');
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        var _loop3 = function _loop3() {
            var alert = _step3.value;

            alert.insertAdjacentHTML('beforeend', '<button type="button" class="close">&times;</button>');
            var closeBtn = alert.querySelector('.close');
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                alert.className += ' alert-dismissed';
                setTimeout(function () {
                    alert.style.display = 'none';
                }, 300);
            });
        };

        for (var _iterator3 = alerts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop3();
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
})();

// tabs
(function tabsMenu() {
    var tabs = document.querySelectorAll('.tabs');
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        var _loop4 = function _loop4() {
            var tab = _step4.value;

            var menuItems = tab.querySelectorAll('.menu li a');
            var activeTab = tab.querySelector('.menu .active');
            var tabBodies = tab.querySelectorAll('.body > div');

            var i = 1;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = tabBodies[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var tabBody = _step5.value;

                    tabBody.id = tab.id + '-tab-' + i++;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            i = 1;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                var _loop5 = function _loop5() {
                    var menuItem = _step6.value;

                    menuItem.href = "#" + tab.id + '-tab-' + i++;
                    menuItem.addEventListener('click', function (e) {
                        e.preventDefault();

                        var menuActiveItem = tab.querySelector('.menu .active');

                        if (menuActiveItem !== null) {
                            menuActiveItem.classList.remove('active');
                            tab.querySelector('.body > .show').classList.remove('show');
                        }
                        menuItem.classList.add('active');
                        tab.querySelector(menuItem.getAttribute('href')).classList.add('show');
                    });
                };

                for (var _iterator6 = menuItems[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    _loop5();
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            if (activeTab !== null) {
                var activeBodyItem = tab.querySelector('.body ' + activeTab.getAttribute('href'));
                activeBodyItem.classList.add('show');
            }
        };

        for (var _iterator4 = tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop4();
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
})();

// modal
(function modal() {

    var modalButtons = document.querySelectorAll('[data-modal-id]');
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        var _loop6 = function _loop6() {
            var modalButton = _step7.value;

            var modalId = modalButton.getAttribute('data-modal-id');
            modalButton.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(modalId).style.display = 'flex';
                document.querySelector('body').style.overflow = 'hidden';

                setTimeout(function () {
                    document.querySelector(modalId).classList.add('show');
                }, 1);
            });
        };

        for (var _iterator7 = modalButtons[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            _loop6();
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    var modals = document.querySelectorAll('.modal');
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
        var _loop7 = function _loop7() {
            var modal = _step8.value;

            var closeButtons = modal.querySelectorAll('.close');
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = closeButtons[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var closeButton = _step9.value;

                    closeButton.addEventListener('click', function (e) {
                        e.preventDefault();

                        modal.classList.remove('show');
                        document.querySelector('body').style.overflow = 'auto';

                        setTimeout(function () {
                            modal.style.display = 'none';
                        }, 300);
                    });
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        };

        for (var _iterator8 = modals[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            _loop7();
        }
    } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
            }
        } finally {
            if (_didIteratorError8) {
                throw _iteratorError8;
            }
        }
    }
})();

// navbar
(function navbar() {
    var navbarMobileMenuButtons = document.querySelectorAll('.navbar-mobile-menu-button');
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
        var _loop8 = function _loop8() {
            var navbarMobileMenuButton = _step10.value;

            navbarMobileMenuButton.addEventListener('click', function (e) {
                e.preventDefault();

                var menu = document.querySelector(navbarMobileMenuButton.getAttribute('data-menu-id'));

                toogleFlex(menu);
            });
        };

        for (var _iterator10 = navbarMobileMenuButtons[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            _loop8();
        }
    } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                _iterator10.return();
            }
        } finally {
            if (_didIteratorError10) {
                throw _iteratorError10;
            }
        }
    }

    setBodyMargin();
    window.addEventListener('resize', function () {
        setBodyMargin();
    });
    window.addEventListener('scroll', function () {
        if (document.querySelector('.navbar.fixed') !== null) {
            if (window.scrollY > 100) {
                document.querySelector('.navbar.fixed').classList.add('compact');
            } else {
                document.querySelector('.navbar.fixed').classList.remove('compact');
            }
        }
    });
})();

function setBodyMargin() {
    var navbarFixed = document.querySelector('.navbar.fixed');
    document.querySelector('body').style.marginTop = navbarFixed.clientHeight + 10 + 'px';
}

(function dropdown() {
    var dropdownMenus = document.querySelectorAll('.dropdown');
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
        var _loop9 = function _loop9() {
            var dropdownMenu = _step11.value;

            var dropdownMenuButton = dropdownMenu.querySelector('.dropdown-menu-button');
            dropdownMenuButton.addEventListener('click', function (e) {
                e.preventDefault();
                var menu = dropdownMenu.querySelector('.dropdown-menu');
                toogleFlex(menu);
            });
        };

        for (var _iterator11 = dropdownMenus[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            _loop9();
        }
    } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
            }
        } finally {
            if (_didIteratorError11) {
                throw _iteratorError11;
            }
        }
    }
})();

function toogleFlex(element) {
    if (getComputedStyle(element).display === 'none') {
        element.style.display = 'flex';
    } else {
        element.style.display = null;
    }
}