Context for Class:-
1. DOM Manipulation
2. Create a mock Reconcilers
3. State and State management

Complex DOM Manipulation:-
Creating a DOM element which has another DOM element inside:-
eg:-
    <div>
        <h1>Hi there<h1>
    </div>

Approach #1
<html>
<body>
    <button onclick="createComplexDomElement()">Add</button>
</body>
<script>
    function createComplexDomElement(){
        const div = document.createElement("div");
        div.innerHTML = "<h1> hi there </h1>";
        document.querySelector("body").appendChild(div);
    }
</script>
</html>

Approach #2
Creating a DOM element which has another DOM element inside
<html>
    <body>
        <button onclick="createComplexDomElement()">Add</button>
    </body>
    <script>
        function createComplexDomElement(){
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            h1.innerHTML = "random text";
            div.appendChild(h1);
            document.querySelector("body").appendChild(div);
        }
    </script>
</html>