        const settings = {
            backgroundColor: 'lightblue',
            fontSize: '18px',
            content: 'This is a styled div inside the box'
        };

        function applySettings(settings) {
            const box = document.getElementById('centered-box');
            box.style.backgroundColor = settings.backgroundColor;
            box.style.fontSize = settings.fontSize;
            box.textContent = settings.content;
        }