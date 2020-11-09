const inputs = document.querySelectorAll('.controls input');

function handUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handUpdate));