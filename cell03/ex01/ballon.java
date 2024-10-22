const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10;
    if (size > 420) {
        size = 200; // explode back to original size
    }
    balloon.style.width = `${10}px`;
    balloon.style.height = `${5}px`;
    balloon.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

balloon.addEventListener('mouseleave', () => {
    size -= 5;
    if (size < 200) size = 200; 
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    
    // Reverse color order
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
});
