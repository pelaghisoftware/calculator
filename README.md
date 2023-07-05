# calculator

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
<!-- [Acknowledgements](#acknowledgements) -->

## Overview
1. [Live demo](https://calculator.pelaghisoftware.com)
    - To use:
        - git clone https://github.com/pelaghisoftware/calculator.git
        - cd calculator
        - docker build . -t calculator
        - docker run -d -p 8081:8081 --restart always calculator
2. Used React to create a simple calculator application.
3. In this project, I improved on the following.
    - Modern React.
    - Using newer Java features such as records.
    - Implementing a usable Chain of Responsibility Pattern.
4. Some simple tips:
    - Use a Chain of Responsiblity pattern when you have a lengthy if/if else/else or when there is a set of steps that must happen in order to allow for easy addition and removal.
    - Use dependency injection through the constructors instead of field injection. This allows your code to require less changes if you want to move away from Spring.

## Built With
1. [React@18.2.0](https://react.dev/)

## Features

This project serves as a simple example of how to create a simple application in React.

## Contact
### Email
[jon.ross@pelaghisofware.com](mailto:jon.ross@pelaghisoftware.com)

### Blog
[www.pelaghisoftware.com](https://www.pelaghisoftware.com)

<!-- ## Acknowledgements ->