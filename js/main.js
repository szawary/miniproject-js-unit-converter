const btn = document.querySelector('.button');

(function clickButton() {

    btn.addEventListener(

        'click', function calcClick() {

            let feets = document.querySelector('.feet');
            let inches = document.querySelector('.inches');

            let cm = (parseInt(feets.value)) * 2.54 + (parseInt(inches.value) / 100 * 2.54);
            let resultAmount = document.querySelector('.resultAmount');

            return resultAmount.innerHTML = cm + 'cm';

        }

    );

})();
