// Created by Samuel Lord (NodeMixaholic/Sparksammy)
// Now Maintained by Maxwell (GOrwell1984)
// Licensed under Samuel Public License with <3

// Functions for commonly used elements

// Get element by ID
function getElementById(elementID) {
  return document.getElementById(elementID)
}

//Convert markdown to HTML and back
function markdownToHTML(markdown) {
    // Replace headers (h1, h2, h3) with corresponding HTML tags
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');

    // Replace bold and italic text with corresponding HTML tags
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
    markdown = markdown.replace(/\*(.*)\*/gim, '<i>$1</i>');

    // Replace unordered list items with HTML list tags
    markdown = markdown.replace(/\* (.*?)(\n|$)/gim, '<li>$1</li>');

    // Replace inline code with HTML <code> tag
    markdown = markdown.replace(/`(.*?)`/gim, '<code>$1</code>');

    // Replace blockquotes with HTML <blockquote> tag
    markdown = markdown.replace(/^\s*> (.*)$/gim, '<blockquote>$1</blockquote>');

    // Replace horizontal rules with HTML <hr> tag
    markdown = markdown.replace(/^\s*[-*_]{3,}\s*$/gim, '<hr>');

    // Replace line breaks with HTML <br> tag
    markdown = markdown.replace(/\n$/gim, '<br>');

    // Replace images with HTML <img> tag
    markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">');

    // Replace links with HTML <a> tag
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    markdown = markdown.replaceAll("<ol><ul>", "")

    markdown = markdown.replaceAll("</ul></ol>", "")
    
    return markdown;
}

function htmlToMarkdown(html) {
    // Replace headers (h1, h2, h3) with corresponding Markdown tags
    html = html.replace(/<h1>(.*?)<\/h1>/gim, '# $1');
    html = html.replace(/<h2>(.*?)<\/h2>/gim, '## $1');
    html = html.replace(/<h3>(.*?)<\/h3>/gim, '### $1');

    // Replace bold and italic text with corresponding Markdown tags
    html = html.replace(/<b>(.*?)<\/b>/gim, '**$1**');
    html = html.replace(/<i>(.*?)<\/i>/gim, '*$1*');

    // Replace unordered list items with Markdown list tags
    html = html.replace(/<ul>(.*?)<\/ul>/gim, function(match, p1) {
        let listItems = p1.trim().split('</li>');
        listItems.pop();
        listItems = listItems.map(item => '* ' + item.trim().replace(/<li>/gim, '')).join('\n');
        return listItems;
    });

    // Replace ordered list items with Markdown list tags
    html = html.replace(/<li>(.*?)<\/li>/gim, '* $1\n');

    // Replace inline code with Markdown backticks
    html = html.replace(/<code>(.*?)<\/code>/gim, '`$1`');

    // Replace blockquotes with Markdown blockquote tag
    html = html.replace(/<blockquote>(.*?)<\/blockquote>/gim, '> $1');

    // Replace horizontal rules with Markdown horizontal rules
    html = html.replace(/<hr>/gim, '---');

    // Replace line breaks with Markdown line breaks
    html = html.replace(/<br>/gim, '\n');

    // Replace images with Markdown image syntax
    html = html.replace(/<img alt="(.*?)" src="(.*?)">/gim, '![$1]($2)');

    // Replace links with Markdown link syntax
    html = html.replace(/<a href="(.*?)">(.*?)<\/a>/gim, '[$2]($1)');

    html = html.replaceAll("<ol><ul>", "")

    html = html.replaceAll("</ul></ol>", "")
    
    return html;
}

// Generalized element creation
function createElement(tagName, elementID, attributes = {}) {
  const element = document.createElement(tagName);
  element.id = elementID;
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  document.body.appendChild(element);
  return element;
}

function createDiv(elementID) {
  createElement("div", elementID);
}

function createParagraph(elementID, text) {
  let elem = createElement("p", elementID);
  elem.innerText = `${text}`
  return elem
}

function initHead(pageTitle = "") {
    // Create head element
    let head = document.createElement("head");

    // Create title element
    let titleElement = document.createElement("title");
    titleElement.textContent = pageTitle;

    // Create link element for app icon
    let appIcon = document.createElement("link");
    appIcon.rel = "apple-touch-icon";
    appIcon.sizes = "180x180";
    appIcon.href = "icon.png";

    // Create link element for favicon
    let favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "icon.png";

    // Append title, app icon, and favicon to the head element
    head.appendChild(titleElement);
    head.appendChild(appIcon);
    head.appendChild(favicon);

    // Append head element to the document
    document.documentElement.insertBefore(head, document.documentElement.firstChild);
}


function initBody(bodyID = "body") {
  // Create a new body element with the desired id
  const newBody = document.createElement("body");
  newBody.id = bodyID;

  // Get a reference to the existing body element (if any)
  const oldBody = document.body;

  // Replace the existing body (if present) with the new one
  if (oldBody) {
      document.documentElement.replaceChild(newBody, oldBody);
  } else {
      // Simply append the new body if none exists
      document.documentElement.appendChild(newBody);
  }
}

function createButton(elementID, text, attributes = {}) {
  let elem = createElement("button", elementID);
  elem.innerText = `${text}`
  for (const [name, value] of Object.entries(attributes)) {
    elem.setAttribute(name, value);
  }
  return elem;
}

// Insert element with ID to element with ID
function insertElementIntoId(elementIdOuter, elementIdSelf, tagName) {
  const element = document.createElement(tagName);
  element.id = elementIdSelf;
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  getElementById(elementIdOuter).appendChild(element);
  return element;
}

// Insert HTML to element with ID
function insertHTMLIntoId(elementIdOuter, html) {
  getElementById(elementIdOuter).innerHTML = `${String(html)}`;
  return element;
}

function changeAttributes(element, attributes = {}) {
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
}

function createImage(elementID, src) {
  return createElement("img", elementID, { src: src });
}

// Get URL parameters
function getURLParameters() {
  return new URLSearchParams(window.location.search);
}

// Read file contents
function readFileContents(file) {
  file = file.toString();
  const fileToRead = new File([""], file);
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(fileToRead, "UTF-8");
  });
}

// Read data file as data URL
function readDataFile(file) {
  file = file.toString();
  const fileToRead = new File([""], file);
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(fileToRead);
  });
}

function writeToBody(html) {
  document.body.innerHTML += html.toString();
}

function overwriteBody(html) {
  document.body.innerHTML = html.toString();
}

function randomPOS(elementID) {
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  document.getElementById(elementID).style.top = `${top}%`;
  document.getElementById(elementID).style.left = `${left}%`;
}

function pos(elementID, x, y) {
  document.getElementById(elementID).style.top = `${y}%`;
  document.getElementById(elementID).style.left = `${x}%`;
}

// Select a random value in an array (handles non-arrays)
function randomSelectArray(array) {
  if (Array.isArray(array)) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else {
    console.log(`Error: ${array} is not an Array!`);
    return null; // Or throw an error
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncSleep(ms) {
  await new Promise(r => setTimeout(r, ms));
}

// Check if a variable is a function
function isFunction(item) {
  return typeof item === 'function';
}

function applyCSS(elementID, prop, value) {
  document.getElementById(elementID).style[prop] = value;
}

function writeTimeAndDate(elementID, hourFormat) {
  const element = document.getElementById(elementID);
  const date = new Date();
  const locale = hourFormat === 24 ? "en-GB" : "en-US";
  element.innerText = date.toLocaleString(locale);
}

function writeText(elementID, str) {
  document.getElementById(elementID).innerText = String(str);
}

function writeHTML(elementID, str) {
  document.getElementById(elementID).innerHTML = String(str);
}

function clearPage() {
  document.body.innerHTML = "";
}

function createList(listID, items) {
  const list = document.createElement("ul");
  list.id = listID;
  document.body.appendChild(list);
  items.forEach(item => (list.innerHTML += `<li>${item}</li>`));
}

function addToList(listID, jsArray) {
    let listParent = document.getElementById(listID);
    jsArray.forEach(item => {
        listParent.innerHTML += `<li>${item}</li>`;
    });
}

// Gets the value of an attribute
// Example: getAttribute(document.getElementById("link"), "href");
function getAttribute(element, attribute) {
  let result = element.getAttribute(attribute);
  return result;
}

// Show/Hide Elements
// Example: hideShow(element)
function hideShow(element) {
  if (element.style.display == 'none') {
    element.style.display = '';
  } else{
    element.style.display = 'none';
  }
}

// Example: fadeOut(element, 1000)
function fadeOut(element, ms) {
  let elem = getElementById(element);
  ms = parseInt(ms);
  for (i = 0; i < (ms + 1); i++) {
    elem.style.opacity -= (i / 100);
    sleep(1);
  }
}

// Example: fadeIn(element, 1000);
function fadeIn(element, ms) {
  elem = getElementById(element);
  elem.style.opacity = 0;
  ms = parseInt(ms);
  for (i = 0; i < (ms + 1); i++) {
    elem.style.opacity += (i / 100);
    sleep(1);
  }
}

function spin(elementID, duration) {
  const element = document.getElementById(elementID);
  if (!element) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }

  let start;
  const animate = (timestamp) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const rotation = (elapsed / duration) * 360;
    element.style.transform = `rotate(${rotation}deg)`;

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      start = null;
      element.style.transform = 'none'; // Reset transform after animation completes
    }
  };

  requestAnimationFrame(animate);
}


//Eval alternative
//Example: exec("alert('Hello, world!')")
function exec(jsCode) {
  let js = jsCode.toString();
  Function(js)()
}




function readInternetText(url) {
    var request = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    request.open('GET', url, false); // Open the request with synchronous mode
    request.send(null); // Send the request with no additional data

    if (request.status === 200) { // Check if the request was successful
        return request.responseText; // Return the response text
    } else {
        return 'Error: ' + request.status; // Return an error message if the request failed
    }
}



function requir3(jsURL) {
  let req = readInternetText(jsURL);
  exec(req);
}

// Example: getFileSize(path/to/file)
function getFileSize(file) {
  file = file.toString();
  file = new File([""], file);
  return file.getFileSize;
}

function lastModified(file) {
  file = file.toString();
  file = new File([""], file);
  return file.lastModified;
}

// Example: playAudio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3", 0.4); 
function playAudio(audio, speed) {
  let ma = new Audio(audio);
  ma.playbackRate = speed;
  ma.play();
}

// Example: redir(url);
function redir(url) {
  window.location.href = url.toString();
}

// Function to import Google Fonts via name
function importGoogleFont(fontName) {
    // Create a new link element
    const link = document.createElement('link');
    
    // Set the rel attribute to 'stylesheet'
    link.rel = 'stylesheet';
    
    // Set the href attribute to the Google Fonts URL with the specified font name
    link.href = `https://fonts.googleapis.com/css?family=${fontName.replace(' ', '+')}`;
    
    // Append the link element to the head of the document
    document.head.appendChild(link);
}


requir3("https://cdn.jsdelivr.net/npm/gun/gun.js") //Add Gun.JS support.

function initGun(relays = []) {
     return Gun(relays)
}

