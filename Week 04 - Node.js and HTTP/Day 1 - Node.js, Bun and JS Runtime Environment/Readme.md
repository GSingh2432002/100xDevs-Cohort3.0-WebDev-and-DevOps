What is Node.js?

    Node.js allows developers to create both front-end and back-end applications using JavaScript. It was released in 2009 by Ryan Dahl.

    Node.js is an open-source JS runtime that allows you to execute JavaScript code on the server side. It's built on Chrome's V8 JavaScript engine.

    Node.js is open-source: This means that the source code for Node.js is publicly available. And it's maintained by contributors from all over the world. The Node.js contribution guide shows you how to contribute.

    Node.js is cross-platform: Node.js is not dependent on any operating system software. It can work on Linux, macOS, or Windows.

    Node.js is a JavaScript runtime environment: When you write JavaScript code in your text editor, that code cannot perform any task unless you execute (or run) it. And to run your code, you need a runtime environment.

    Browsers like Chrome and Firefox have runtime environments. That is why they can run JavaScript code. Before Node.js was created, JavaScript could only run in a browser. And it was used to build only front-end applications.

    Node.js provides a runtime environment outside of the browser. It's also built on the Chrome V8 JavaScript engine. This makes it possible to build back-end applications using the same JavaScript programming language you may be familiar with.

Differences Between the Browser and Node.js Runtime Environments?

    - Both the browser and Node.js are capable of executing JavaScript programs. But there are some key differences that you need to know. They include the following.

    - Access to the DOM APIs:- With the browser runtime, you can access the Document Object Model (DOM). And you can perform all the DOM operations. But Node.js does not have access to the DOM.

    - Node.js exposes almost all the system resources to your programs. This means you can interact with the operating system, access the file systems, and read and write to the files. But, you do not have access to operating systems and file systems from the browser.

    - Window vs Global object:- JavaScript has a built-in global object. The JavaScript global object for the browser is called the window object. In Node.js, the global object goes by the name global. The window object contains methods and properties available only in the browser environment.

    - Control over runtime versions:- With Node.js, you can choose which version to run your server-side application on. As a result, you can use modern JavaScript features without worrying about any version-specific inconsistencies.

    - Contrast this to the browser runtime environment. As a developer, you have no control over the version of browsers your clients use to access your app.

    - Loading modules (import vs require keywords):- Node.js offers out-of-the-box support for CommonJS and ES modules. You can load modules using the require keyword (CommonJS syntax) and the import keyword (ES syntax).

    - Some modern browsers support ES modules. This means you can use import ES modules. But you will still need to create bundles to cater to older browsers that do not support ES modules.

What is Runtime?
The environment where JavaScript code is executed. It could be
1. On the server
2. In the browser
3. On a small watch

What is V8 engine?

    - We have reached the lowest level of Node.js, where things become messy and complicated. JavaScript is a dynamically-typed interpreted language, and everything we execute in JavaScript is passed to the engine. The engine then interacts with its environment and generates the necessary bytecode for the machine to run our program. The engine responsible for this is called V8, which is an open-source high-performance JavaScript and WebAssembly engine developed by Google. V8 is written in C++ and is utilized in both Chrome (or similar environments) and Node.js. V8 fully supports ECMAScript and WebAssembly. Interestingly, V8 is not limited to browsers; it can also be run independently and embedded into any C++ application.

Why the V8?

    - The more lower level the more responsibilities. For converting c/c++ into assembly we need a compiler. To convert assembly into machine we have an assembler.
    So to convert Js into runnable code we need JS Engine. Spidermonkey was was used in Firefox and later V8 was created & was used in Google Chrome & which is used in Nodejs.
    - A noticeable difference between Spidermonkey and V8 is that like you saw we need to convert the js code into bytecode (bytecode is an abstraction of machine code) to intermediate language and then to machine code. That is how Spidermonkey works. But V8 directly concerts JS into machine code.

What is Bun?

    - Bun, a JavaScript runtime, boasts a remarkable speed that is claimed to be 4x faster than NodeJS. It serves as an all-in-one JavaScript runtime and toolkit, allowing you to replace NodeJS in your projects with Bun. This article explores the key features and benefits of using Bun, which ships as a single executable that can be easily installed on your computer. Moreover, Bun directly runs TypeScript and utilizes the JavaScriptCore engine.
    - Bun is developed using Zig, which is a low-level, general-purpose programming language. Zig is an imperative, statically typed, and compiled system programming language with the aim of replacing C and C++.Zig is designed to be both smaller and easier to work with while also providing modern features

What is npm?

    - npm stands for Node Package Manager. It’s a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.

Why use npm?

    - It’s certainly possible to manage your project’s dependencies yourself. As your project grows, though, this can become a herculean task.

    - This is where a package manager like npm comes in. npm solves this problem by handling dependency and package management for your project. 

    - You define all your project’s dependencies inside your package.json file. Anytime you or a team member needs to get started with your project, all they have to do is run npm install.

    - This will immediately install all the necessary dependencies for your project. In the package.json file, you can also specify which versions your project depends upon. This is useful to prevent updates from these packages from breaking your project.

What is a package.json?
A package.json file is created by your package manager (in this case npm) and exists at the root of a project in JavaScript/Node. To generate a package.json file you can run npm init. You’ll then be asked to fill out some metadata for your project such as:

    Name – your project’s name
    Version – current version in major.minor.patch format (1.0.0, 1.2.3, etc.)
    Description – description of the project
    License – the license your project is under, so people know how they are allowed to use it. Full list of licenses on the Software License Data Exchange site.
    The package.json file is in JSON format and is used for managing the project’s dependencies, scripts, versions, etc. Here’s a simple example:

        {
        "name": "My cool project",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "directories": {
            "test": "test"
        },
        "scripts": {
            "test": "jest",
        },
        "license": "ISC"
        }

What is npm scripts?
In the package.json file there is also a scripts property. This can be used to run command line tools that are installed within the project’s local context. Common scripts you might use are things like:

    npm test—to run your tests
    npm build—to build your project
    npm start—to run your project locally

What is Dependencies vs. devDependencies?

    There are two properties for dependencies in a package.json file, dependencies and devDependencies. So what’s the difference?

    Dependencies are the list of modules/packages that are required for your project to run. These are installed using npm install to add the package to the dependencies list.

    devDependencies, short for development dependencies, are modules/packages that are NOT required for your project to run. These are often things that help the development process but aren’t part of the project themselves. For example, linters like eslint, testing, etc.