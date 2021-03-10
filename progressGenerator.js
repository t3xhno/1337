function* generator() {
    let progress = 0;
    while (true) {
        if (progress >= 100) progress = 0;
        yield progress++;
    }
}
const progress = generator();

const progressBar = document.getElementById('main_progress');
const colorPicker = document.getElementById('color_picker');
const speedPicker = document.getElementById('speed_picker');

progressBar.style.backgroundColor = colorPicker.value;
colorPicker.onchange = () => {
    progressBar.style.backgroundColor = colorPicker.value;
    console.log(`%cNew color: %c${colorPicker.value}`, 'font-size:1.5rem;color:yellow;', 'font-size:1.5rem;color:purple;');
};

let speed = speedPicker.value;
speedPicker.onchange = () => {
    console.log(`%cChanged speed: %c${speedPicker.value}ms`, 'color:green;font-size:1.5rem;', 'color:red;font-size:1.5rem;');
    speed = speedPicker.value;
    clearInterval(mainLoop);
    mainLoop = setInterval(loopCallback, speed);
};

const loopCallback = () => {
    let currentProgress = progress.next().value;
    progressBar.value = currentProgress;
    progressBar.innerText = currentProgress;
};

let mainLoop = setInterval(loopCallback, speed);