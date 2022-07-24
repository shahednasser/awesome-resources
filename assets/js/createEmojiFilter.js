// This script enables the ability of the user to filter the resource list by emojis. 

// From a user perspective:
// 1. When the user clicks on an emoji, all other buttons are shaded transparently, so it is clear which one is actived. 
// 2. All resource list items which do not contain the clicked emoji are hidden.
// 3. When the user clicks on another emoji, the list of resources is filtered by the new emoji.
// 4. When the user clicks on the same emoji again, the list of resources is unfiltered, all resources are shown and all buttons have full opacity again.
// Thus it is possible to see all resources again even after filtering. 

// From a technical perspective, the following should be noted:

// The script works with a single main function which gets triggered after `index.html` is loaded.
// It is included in `footer.html` for this reason.
// It wraps each of the demonstrated emoji in *Emojis Cheatsheet*  <buttons>.
// Every button gets an event listener which handles the functionality.
// Since the emojis in *Emojis Cheatsheet* do not have a special CSS class, this script automatically 
// applies the filter function to the first eight emojis it can find, with the exception of the very first.
// This will break when the `README.md` gets redesigned in a fundamental way.   


buttonList = [];
activeFilter = "";

function main() {
  // find all elements with class "emoji"
  const emoji = document.getElementsByClassName("emoji");
  // get the first seven elements
  const emojiArray = Array.from(emoji).slice(1, 8);

  // wrap each emojiArray element in a <button>
  emojiArray.forEach(function (emoji) {
    const button = document.createElement("button");
    button.innerHTML = emoji.outerHTML;
    button.classList.add("emoji-button");
    // add event listener to each button
    emoji.parentNode.replaceChild(button, emoji);
    buttonList.push(button);
    button.addEventListener("click", function () {
      // HANDLE THE SHADING OF THE BUTTONS AND SETTING THE FILTER
      // get the src of the clicked emoji
      const src = emoji.src;
      // if the activeFilter is equivalent to the src of the clicked emoji
      // then remove the activeFilter
      if (activeFilter === src) {
        activeFilter = "";
        console.log('active filter removed');
      }
      // else set the activeFilter to the src of the clicked emoji
      else {
        activeFilter = src;
      }

      // if activeFilter is empty set all buttons to opacity 1
      if (activeFilter === "") {
        buttonList.forEach(function (button) {
          button.style.opacity = 1;
        });
      }
      // else set all buttons to opacity 0.3 except the button with src equal to activeFilter
      else {
        buttonList.forEach(function (button) {
          if (button.firstChild.src === activeFilter) {
            button.style.opacity = 1;
          } else {
            button.style.opacity = 0.3;
          }
        });
      }
      // HANDLE HIDING AND SHOWING OF THE CONTENT
      // hide/unhide the content overview
      const contentOverview = document.getElementById("content");
      if (activeFilter === "") {
        contentOverview.style.display = "block";
      } else {
        contentOverview.style.display = "none";
      }
      
      // get all li elements

      const liList = document.getElementsByTagName("li");
      // loop elements of li
      for (const li of liList) {
        // get list of child elements
        const childList = li.children;
        // check if there is an img.emoji in the childList
        if (childList.length > 0) {
          const img = childList[0];
          // if the src of the img.emoji is equal to the activeFilter
          // then show the li element
          if (img.src === activeFilter || activeFilter === "") {
            li.style.display = "block";
          }
          // else hide the li element
          else {
            li.style.display = "none";
          }
        }
      }
    });
  });
}

main();
