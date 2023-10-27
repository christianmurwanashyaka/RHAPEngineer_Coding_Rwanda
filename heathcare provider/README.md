# School Locator Web Application
Developed a school locator web application using HTML, CSS, and JavaScript, fetching school data from a JSON file and presenting an efficient order of school locations based on user-entered pincode using the TSP algorithm.

This project is a school locator web application that allows users to find schools based on a specific pincode. The application takes a pincode as input from the user and displays an efficient order of school locations, matching that pincode, using the Traveling Salesman Problem (TSP) algorithm. The project is implemented using HTML, CSS, and JavaScript, and it utilizes a JSON file to store the school data.

## Project Files

The project consists of the following files:

1. `index.html`: This file contains the HTML structure of the web application. It includes a form where users can enter a pincode and a submit button to initiate the search. The search results are displayed in a section with the id "schoolList."

2. `styles.css`: This file contains the CSS styles for the web application. It defines the layout, colors, and animations of the user interface elements.

3. `script.js`: This file contains the JavaScript code responsible for handling form submission, fetching school data, calculating the efficient order of schools, and displaying the results. It utilizes the Fetch API to retrieve data from the `data.json` file.

4. `data.json`: This file contains dummy data in JSON format. It stores information about schools, including their names, addresses, and pincodes.

## Application Workflow

1. When the user enters a pincode and submits the form, the `searchForm` submit event listener in `script.js` is triggered.

2. The `fetchSchoolData` function is called, which retrieves the pincode entered by the user and fetches the school data from the `data.json` file using the Fetch API.

3. Once the data is successfully fetched, the schools are filtered based on the provided pincode using the `filter` method. If there are matched schools, the `tspSearch` function is called to determine the efficient order for visiting the schools.

4. The `displaySchools` function is then called to present the search results. It creates HTML elements dynamically to display the efficient order of schools and their details, such as name, address, and pincode.

5. If no schools are found for the given pincode, an appropriate message is displayed.

6. If there is an error while fetching or processing the data, an error message is displayed.

## Animation

The web application also includes a CSS animation effect. When the user hovers over the card element, it rotates slightly. This animation is achieved by the `handleMouseMove` and `resetAnimation` functions in `script.js`. The `handleMouseMove` function calculates the mouse position relative to the card's center and applies a transformation to create the rotation effect.

## Future Enhancements

This school locator web application can be further enhanced with additional features, such as:

- Autocomplete suggestions for pincode input to improve user experience.
- Integration with mapping APIs to display school locations on a map.
- Real-time data updates to ensure the availability of the latest school information.
- Integration with a backend server to handle dynamic data retrieval and processing.

These improvements would provide a more comprehensive and user-friendly school locator experience.
