const messageArticle = document.querySelector('#messages');
const messageFragment = document.createDocumentFragment();

const firstMessage = document.createElement('section')
firstMessage.innerText = 'Hello Zach.';
firstMessage.className = 'message';
messageFragment.appendChild(firstMessage);

const secondMessage = document.createElement('section');
secondMessage.innerText = 'Who is this?';
secondMessage.className = 'message';
messageFragment.appendChild(secondMessage);

const thirdMessage = document.createElement('section');
thirdMessage.innerText = 'I am your father.';
thirdMessage.className = 'message';
messageFragment.appendChild(thirdMessage);

const fourthMessage = document.createElement('section');
fourthMessage.innerText = 'No, it can\'t be..';
fourthMessage.className = 'message';
messageFragment.appendChild(fourthMessage);

const fifthMessage = document.createElement('section');
fifthMessage.innerText = 'You know it in your heart to be true.';
fifthMessage.className = 'message';
messageFragment.appendChild(fifthMessage);

messageArticle.appendChild(messageFragment);