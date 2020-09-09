// 1. Change the title of the page to `Hello AltCampus!`
document.querySelector('#test').textContent = 'Hello AltCampus!'
// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`
document.querySelector('h2').textContent = 'Learning DOM';
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
document.querySelector('ul').children[0].textContent = 'all about document';


//    - Select the input element with name `email`
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
 console.log(document.querySelector('.topics').children);
 // 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelector('#email');
console.log(emailInput)
// 5. Select the ul element using class selector and store in `topics`
let topics = document.querySelector('.topics')
console.log(topics)
// 6. Select the first label element and store in `label`
let label = document.querySelector('label');;
console.log(label)
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.querySelector('#remember');
console.log(inputCheckbox);
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector('input[type ="password"]');
console.log(password);
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.querySelector('input[placeholder= "password"]');
console.log(attrPassword);
// 10. Select all the `li` element and store in `allTopics`
     let allTopic = document.querySelectorAll('li');
     console.log(allTopic);
// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll('input');
console.log(allInput)
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
 allTopic.forEach((item) => console.log(item.textContent));
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll('.list');
console.log(listOfSelectedTopics);
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector('ul > li');
console.log(firstLi);
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let TotalImg = document.querySelectorAll('img').length;
console.log(`The total number of img element is ${TotalImg}`);
// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll('p');
console.log(allPElement);
// 17. Select all the buttons and log the count of buttons.
  let btnCount = document.querySelectorAll('input[type ="submit"]').length;
  console.log(btnCount);
// 18. Select all the `label` element and log the count.
let labelCount = document.querySelectorAll('label').length;
console.log(labelCount);
// 19. Select all the elements with `id` of `test`
let TestId = document.querySelectorAll('#test').length;
console.log(TestId);
// 20. Select the first element with id `test` using `getElementById`
let FirstElement = document.getElementById('test');
console.log(FirstElement);
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let parentEle = topics.parentElement;
console.log(parentEle);
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
allTopic.forEach((item) => console.log(item.textContent));
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
