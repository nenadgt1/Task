function updateContent() {
    const box = document.getElementById('centered-box');
    box.textContent = "Loading...";

    setTimeout(() => {
        box.textContent = "Data Loaded!";
    }, 2000);
}