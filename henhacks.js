function phasesOfMatter(){
	window.location.href = "phasesOfMatter.html";
}

function laws(){
	window.location.href = "laws.html";
}

function propertiesOfFunctions(){
	window.location.href = "propertiesOfFunctions.html"
}

function modelSimulation(){
	window.location.href = "modelSimulation.html"
}

function otherProperties(){
	window.location.href = "otherProperties.html"
}

function propertiesOfPath(){
	window.location.href = "propertiesOfPath.html"
}

function homepage(){
	window.location.href = "HenHacks-Homepage.html"
}

function volume(){
	window.location.href = "volume.html"
}

function temp(){
	window.location.href = "temp.html"
}

function pressure(){
	window.location.href = "pressure.html"
}

function enthalpy(){
	window.location.href = "enthalpy.html"
}

function entropy(){
	window.location.href = "entropy.html"
}

function gibbs(){
	window.location.href = "gibbs.html"
}

function helm(){
	window.location.href = "helm.html"
}

function internalEnergy(){
	window.location.href = "internalEnergy.html"
}

function firstLaw(){
	window.location.href = "firstLaw.html"
}

function secondLaw(){
	window.location.href = "secondLaw.html"
}

function thirdLaw(){
	window.location.href = "thirdLaw.html"
}

document.addEventListener("DOMContentLoaded", function() {
    const temperatureSlider = document.getElementById('temperature');
    const pressureSlider = document.getElementById('pressure');
    const volumeSlider = document.getElementById('volume');

    const temperatureValue = document.getElementById('temperatureValue');
    const pressureValue = document.getElementById('pressureValue');
    const volumeValue = document.getElementById('volumeValue');

    const lockTemperatureCheckbox = document.getElementById('lockTemperature');
    const lockPressureCheckbox = document.getElementById('lockPressure');
    const lockVolumeCheckbox = document.getElementById('lockVolume');

    function updateSliderValues() {
		const temperatureSlider = document.getElementById('temperature');
		const pressureSlider = document.getElementById('pressure');
		const volumeSlider = document.getElementById('volume');
	
		const temperatureValue = document.getElementById('temperatureValue');
		const pressureValue = document.getElementById('pressureValue');
		const volumeValue = document.getElementById('volumeValue');
	
		const lockTemperatureCheckbox = document.getElementById('lockTemperature');
		const lockPressureCheckbox = document.getElementById('lockPressure');
		const lockVolumeCheckbox = document.getElementById('lockVolume');
	
		const temperature = parseFloat(temperatureSlider.value);
		const pressure = parseFloat(pressureSlider.value);
		const volume = parseFloat(volumeSlider.value);
	
		if (!lockTemperatureCheckbox.checked) {
			temperatureValue.textContent = temperature.toFixed(0);
		}
	
		if (!lockPressureCheckbox.checked) {
			pressureValue.textContent = pressure.toFixed(3);
		}
	
		if (!lockVolumeCheckbox.checked) {
			volumeValue.textContent = volume.toFixed(3);
		}
	
		if (lockTemperatureCheckbox.checked) {
			temperatureSlider.disabled = true;
			const newPressure = (8.314 * temperature) / volume;
			pressureSlider.value = newPressure.toFixed(3);
			pressureValue.textContent = newPressure.toFixed(3);
	
			const newVolume = (8.314 * temperature) / newPressure;
			volumeSlider.value = newVolume.toFixed(3);
			volumeValue.textContent = newVolume.toFixed(3);
		} else {
			temperatureSlider.disabled = false;
		}
	
		if (lockPressureCheckbox.checked) {
			pressureSlider.disabled = true;
			const newTemperature = (pressure * volume) / 8.314;
			if (newTemperature >= 100 && newTemperature <= 500) {
				temperatureSlider.value = newTemperature.toFixed(0);
				temperatureValue.textContent = newTemperature.toFixed(0);
			}
			const newVolume = (8.314 * newTemperature) / pressure;
			volumeSlider.value = newVolume.toFixed(3);
			volumeValue.textContent = newVolume.toFixed(3);
		} else {
			pressureSlider.disabled = false;
		}
	
		if (lockVolumeCheckbox.checked) {
			volumeSlider.disabled = true;
			const newTemperature = (pressure * volume) / 8.314;
			if (newTemperature >= 100 && newTemperature <= 500) {
				temperatureSlider.value = newTemperature.toFixed(0);
				temperatureValue.textContent = newTemperature.toFixed(0);
			}
			const newPressure = (8.314 * newTemperature) / volume;
			pressureSlider.value = newPressure.toFixed(3);
			pressureValue.textContent = newPressure.toFixed(3);
		} else {
			volumeSlider.disabled = false;
		}
	}
	
    // Add event listener for all lock checkboxes
    lockTemperatureCheckbox.addEventListener('change', function() {
        if (lockTemperatureCheckbox.checked) {
            lockPressureCheckbox.checked = false;
            lockVolumeCheckbox.checked = false;
        }
        updateSliderValues();
    });

    lockPressureCheckbox.addEventListener('change', function() {
        if (lockPressureCheckbox.checked) {
            lockTemperatureCheckbox.checked = false;
            lockVolumeCheckbox.checked = false;
        }
        updateSliderValues();
    });

    lockVolumeCheckbox.addEventListener('change', function() {
        if (lockVolumeCheckbox.checked) {
            lockTemperatureCheckbox.checked = false;
            lockPressureCheckbox.checked = false;
        }
        updateSliderValues();
    });

    // Add event listener for all sliders
    [temperatureSlider, pressureSlider, volumeSlider].forEach(slider => {
        slider.addEventListener('input', updateSliderValues);
    });
});

