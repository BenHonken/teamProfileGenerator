# teamProfileGenerator


## Description

This is a team profile generator by Ben Honken.  It uses inquirer to gather information about your team, then generates a team page.  A separate function was assigned for each question because the questions vary by the employee's role.  Employee IDs were checked to be unique numbers, and the user was prompted again if an ID was in use or was not a number.  Each employee is assigned a class, and a card is created and populated on the page.  Running the script with node will create an HTML file.  

[Inquirer](screenshots/inquirer.png)
[ID](screenshots/id.png)

HTML was generated using a base and templates for the cards which were filled with mustasche.  

[HTMLBase](htmlBase.png)
[Mustasche](mustasche.png)
[HTMLTemplate](htmlTemplate.png)


## Usage

As a manager, I want to generate a clean team profile quickly so that I can be prepared to send it to potential clients.

## Credits

Ben Honken made this.

## License

MIT License

Copyright (c) [2019] [Ben Honken]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
