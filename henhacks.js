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
	
		const temperatureValueSpan = document.getElementById('temperatureValue');
		const pressureValueSpan = document.getElementById('pressureValue');
		const volumeValueSpan = document.getElementById('volumeValue');
	
		const lockTemperatureCheckbox = document.getElementById('lockTemperature').checked;
		const lockPressureCheckbox = document.getElementById('lockPressure').checked;
		const lockVolumeCheckbox = document.getElementById('lockVolume').checked;

		let temperature = parseFloat(temperatureSlider.value);
		let pressure = parseFloat(pressureSlider.value);
		let volume = parseFloat(volumeSlider.value);

		temperatureValueSpan.textContent = temperature.toFixed(0);
		pressureValueSpan.textContent = pressure.toFixed(3);
		volumeValueSpan.textContent = volume.toFixed(3);

		if (lockTemperatureCheckbox && !lockPressureCheckbox && !lockVolumeCheckbox) {
			pressure = pressureSlider.value = temperature * 0.4;
			volume = volumeSlider.value = temperature * 0.3;
		} else if (!lockTemperatureCheckbox && lockPressureCheckbox && !lockVolumeCheckbox) {
			temperature = temperatureSlider.value = pressure / 0.3;
			volume = volumeSlider.value = pressure * 0.4;
		} else if (!lockTemperatureCheckbox && !lockPressureCheckbox && lockVolumeCheckbox) {
			temperature = temperatureSlider.value = volume / 0.4;
			pressure = pressureSlider.value = volume / 0.3;
		}

		temperatureValueSpan.textContent = temperature.toFixed(0);
		pressureValueSpan.textContent = pressure.toFixed(3);
		volumeValueSpan.textContent = volume.toFixed(3);
	}
	
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

    [temperatureSlider, pressureSlider, volumeSlider].forEach(slider => {
        slider.addEventListener('input', updateSliderValues);
    });
});

function calcTemp(volumeValue, pressureValue) {
    return (P * V) / (8.314);
}

function calcPressure(volumeValue, temperatureValue) {
    return (T * 8.314) / V;
}

function calcVolume(pressureValue, temperatureValue) {
    return (T * 8.314) / P;
}




function calcTemp(volumeValue, pressureValue) {
    return (P * V) / (8.314);
}

function calcPressure(volumeValue, temperatureValue) {
    return (T * 8.314) / V;
}

function calcVolume(pressureValue, temperatureValue) {
    return (T * 8.314) / P;
}



