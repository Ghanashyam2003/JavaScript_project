document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("key-container");

  container.innerHTML = generateHTML("-", "-", "-");

  window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
  });

  function generateHTML(key, code, keycode) {
    return `
            <div class="key-container">
                <h4>Key</h4> 
                <div class="key-content">${key === "" ? "space" : key}</div>
            </div>

            <div class="key-container">
                <h4>Code</h4> 
                <div class="key-content">${code}</div>
            </div>

            <div class="key-container">
                <h4>Keycode</h4> 
                <div class="key-content">${keycode}</div>
            </div>
        `;
  }
});
