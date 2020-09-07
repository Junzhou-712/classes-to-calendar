"use strict";

// Default class start dates
const classStartDate = new Date(2020, 8, 8);
const classEndDate = new Date(2020, 11, 16);
const apiRoot = `http://localhost:5000/api/upload-html`;
const redirectUrl = `http://localhost:3000/classes`;
const retryWaitTime = 1500;

/**
 * Submits the current HTML of the page
 */
function submitHTML() {
  // Get the calendar HTML
  let calendarHTML = document.documentElement.innerHTML;

  // Move onto the next page if there is "No Classes Scheduled" text
  let noScheduledText =
    '<span class="myu_calendar-class no-class">No classes scheduled</span>';
  if (calendarHTML.includes(noScheduledText)) {
    // Go on to the next page
    document
      .querySelector("#ID_UM_SSS_ENRL_SCHEDULE_PGLT button.btn.btn-link.next")
      .click();
    // Retry the request
    setTimeout(submitHTML, retryWaitTime);
    return;
  }

  let url = apiRoot;

  // Added the file to the form data for submission
  let submitFormData = new FormData();
  submitFormData.append(
    "file",
    new File([calendarHTML], "calendar.html", { type: "text/html" })
  );
  // Add the chosen dates to the form
  submitFormData.append("startDate", moment(classStartDate).format("Y-M-d"));
  submitFormData.append("endDate", moment(classEndDate).format("Y-M-d"));

  // Make the post request with the html string
  fetch(url, {
    method: "POST",
    body: submitFormData,
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const { classes } = response;
      // Assert that the returned data is an array
      if (classes && Array.isArray(classes) && classes.length > 0) {
        // Add the classes to the app
        const encodedJSON = encodeURIComponent(JSON.stringify(classes));
        window.open(`${redirectUrl}?course_json=${encodedJSON}`);
      } else {
        throw new Error(
          "No classes extracted. Ensure your image meets the requirements."
        );
      }
    })
    .catch((error) => {
      console.error("Error with html upload", error);
      // Go on to the next page
      document
        .querySelector("#ID_UM_SSS_ENRL_SCHEDULE_PGLT button.btn.btn-link.next")
        .click();
      // Retry the request
      setTimeout(submitHTML, retryWaitTime);
    });
}

/**
 * Make the add to calendar button
 */
function makeButton() {
  // Make the button
  const addToCalendarButton = document.createElement("button");
  addToCalendarButton.setAttribute("id", "submit-classes-button");
  addToCalendarButton.innerHTML = `<i class="fa fa-external-link" aria-hidden="true"></i>Add to Google Calendar`;
  addToCalendarButton.classList.add("btn", "btn-default", "myu_fx-150ms");
  addToCalendarButton.style.cssText =
    "color: #fff; background-color: rgba(122,0,25,0.75);";
  addToCalendarButton.onclick = submitHTML;
  // Add it to the page
  const buttonContainer = document.querySelector(".myu_btn-group");
  console.log(buttonContainer);
  buttonContainer.append(addToCalendarButton);
}

// Set up the mutation observer
const callback = (mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    const nodes = Array.from(mutation.addedNodes);
    for (let node of nodes) {
      // Wait for the main body creation
      if (node.matches && node.matches("#ID_UM_SSS_ENRL_SCHEDULE_PGLT > div")) {
        // Check for the button group
        if (node.querySelector(".myu_btn-group")) {
          makeButton();
          return;
        }
      }
    }
  });
};

// Create the observer
const observer = new MutationObserver(callback);

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});
