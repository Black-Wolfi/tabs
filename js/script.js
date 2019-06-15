window.addEventListener('DOMContentLoaded', function (){

	'use strict'

	let tab  = document.querySelectorAll('.info-header-tab');
	let info = document.querySelector('.info-header');
	let tabContent = document.querySelectorAll('.info-tabcontent');


// Скрыть елементы 

function hideTabContent(a) {

	for (let i = a;	i < tabContent.length ; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
	}
}



hideTabContent(1);

function showTabContent(b) {

	if (tabContent[b].classList.contains('hide')){
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}



// событие на переклчение табов
info.addEventListener('click', function(event){

				let target = event.target;  // ??
				if ( target && target.classList.contains('info-header-tab')) {

					for (let i = 0; i < tab.length; i++) {

						if (target == tab[i]) {
							hideTabContent(0);
							showTabContent(i);	
							break // остановим
						}
					}
				}
			});




/* Таймер **/
let deadline = '2019-10-21';

function getTimeRemaining (endtime) {
		// Получение разницы 
		let t = Date.parse(endtime) - Date.parse(new Date()),
		second = Math.floor((t/1000)%60),
		minutes = Math.floor((t/1000/60)%60),
		hours = Math.floor(((t/1000/60/60)%24));
		
		/// var days = Math.floor(result/1000/60/60/24);

		return {
			'total': t, // для остановки таймера 
			'hours': hours,
			'minutes': minutes,
			'second': second
		};
	}


	function setClock(id, endtime) {

		let timer =  document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			second = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock,1000);

		function updateClock() {

			// передача в верстку
			let t = getTimeRemaining(endtime);
				hours.textContent = t.hours;
				minutes.textContent = t.minutes;
				second.textContent = t.second;

			if (t.total <=0){
				clearInterval(timeInterval);
			}
		}

	}

	setClock('timer', deadline);

});
