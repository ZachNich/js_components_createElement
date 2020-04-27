const messageArticle = document.querySelector('#messages');

const firstMessage = document.createElement('section')
firstMessage.innerText = 'Hello Zach.';
firstMessage.className = 'message';

const secondMessage = document.createElement('section');
secondMessage.innerText = 'Who is this?';
secondMessage.className = 'message';

const thirdMessage = document.createElement('section');
thirdMessage.innerText = 'I am your father.';
thirdMessage.className = 'message';

const fourthMessage = document.createElement('section');
fourthMessage.innerText = 'No, it can\'t be..';
fourthMessage.className = 'message';

const fifthMessage = document.createElement('section');
fifthMessage.innerText = 'You know it in your heart to be true.';
fifthMessage.className = 'message';

messageArticle.appendChild(firstMessage)
messageArticle.appendChild(secondMessage)
messageArticle.appendChild(thirdMessage)
messageArticle.appendChild(fourthMessage)
messageArticle.appendChild(fifthMessage)