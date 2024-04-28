// JavaScript for moving button
document.getElementById('moveButton').addEventListener('click', function() {
    var button = document.getElementById('moveButton');
    var newPosition = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90%
    button.style.left = newPosition + '%';
    button.style.top = newPosition + '%';
});
