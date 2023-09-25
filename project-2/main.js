const prevButton = document.getElementById('button1');
const nextButton = document.getElementById('button2');
const steps = document.querySelectorAll('.progress-step li');
const progressBar = document.querySelector('.line');
const myFirstButton = document.getElementById('button1');
const mySecondButton = document.getElementById('button2');

let currentStep = 0;

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgress();
        progressBar.style.backgroundColor = 'var(--line-border-fill)'; 
        myFirstButton.style.backgroundColor = 'var(--line-border-fill)'; 
        myFirstButton.style.cursor = 'pointer';
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        resetPreviousSteps();
        updateProgress();
    } else if (currentStep === 0) {
        myFirstButton.style.backgroundColor = 'var(--line-border-empty)';
        myFirstButton.style.cursor = 'not-allowed';
    }
});

function resetPreviousSteps() {
    for (let i = currentStep + 1; i < steps.length; i++) {
        steps[i].querySelector('p').style.borderColor = 'var(--line-border-empty)';
    }
}

function updateProgress() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
            steps[currentStep].querySelector('p').style.borderColor = 'var(--line-border-fill)';
        } else {
            step.classList.remove('active');
        }
    });

    const percentage = (currentStep / (steps.length - 1)) * 70;
    progressBar.style.width = `${percentage}%`;

    if (currentStep === steps.length - 1) {
        mySecondButton.style.backgroundColor = 'var(--line-border-empty)';
        mySecondButton.style.cursor = 'not-allowed';
    } else {
        mySecondButton.style.backgroundColor = 'var(--line-border-fill)';
        mySecondButton.style.cursor = 'pointer';
    }
}

updateProgress();
