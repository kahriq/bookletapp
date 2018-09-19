//Declare DOM element variables
const page1 = document.getElementById("page-1");
const storyForm = document.getElementById("storyForm");
const storyInput = document.getElementById("storyInput");
const storyBtn = document.getElementById("storyBtn");
const results = document.getElementById("results");

//Event listener on form
storyForm.addEventListener("submit", e => {
  e.preventDefault();

  //Function that renders div/page with text from form
  function render(content, pageNumber) {
    const page = document.createElement("div");
    page.className = "page";
    page.id = `page-${pageNumber}`;
    page.innerHTML = content;
    results.appendChild(page);
  }

  //Empty results each time button is clicked
  results.innerHTML = "";

  //convert form text into string with p tags
  let story = `${storyInput.value.replace(/\n\n/g, " </p><p> ")}`;

  //split string into an array of words
  const wordArray = story.split(" ");
  const wordCount = wordArray.length;

  //Limits to test for each div/page
  const charLimit = 350;

  //Build an array of pages from formatted string
  const pageArray = [];
  let pageBuilder = "<p>";
  for (let [index, word] of wordArray.entries()) {
    pageBuilder += word + " ";
    //Create page when builder has reached the correct number of characters
    if (pageBuilder.length % charLimit === 0) {
      pageArray.push(pageBuilder);
      pageBuilder = "<p>";
      //Create page if formatted string is less than a page long
    } else if (pageBuilder.length < charLimit && index + 1 === wordCount) {
      pageArray.push(pageBuilder);
      //Create last page
    } else if (index + 1 === wordCount) {
      pageArray.push(pageBuilder);
    }
  }

  //Render pages
  for (let page of pageArray) render(page, pageArray.indexOf(page));

  console.log(pageArray);
});

// Render images
// function getPage() {
//   html2canvas(page1).then(canvas => {
//     rendered.appendChild(canvas);
//   });
// }
