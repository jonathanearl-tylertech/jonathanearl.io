import queryString from 'query-string';

const parsed = queryString.parse(window.location.search)
let notification = document.querySelector('.contact__notification')

switch(parsed.success) {
    case undefined: 
        break;
    case 'true': 
        notification.innerHTML = 'Talk to you soon!';
        break;
    case 'false':
        notification.innerHTML = 'Error, please try again in a little bit';
        break;
}
