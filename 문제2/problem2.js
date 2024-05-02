document.getElementById("inputform").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.querySelector('input[name="name"]').value;
    if (name) {
        var greeting = "Hello, " + name + " !!!!!!!!!!!!!!!!!!!!!!!!! ";
        
        var greetingElement = document.createElement("h1");
        greetingElement.id = "greetingText";
        greetingElement.textContent = greeting;
        document.body.appendChild(greetingElement);
        
        document.getElementById("inputform").style.display = 'none';
    }
});