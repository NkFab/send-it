let statuses = [...document.getElementsByClassName('status')];
let statusColor = () => {
    for (let status of statuses) {
        switch (status.innerHTML) {
            case 'On the go':

                status.style.color = '#03a9f4';
                break;
            case 'Canceled':
                status.nextElementSibling.children[0].style.display = 'none';
                status.nextElementSibling.children[1].style.display = 'none';
                status.style.color = '#f44336';
                break;
            case 'Delivered':
                status.nextElementSibling.children[0].style.display = 'none';
                status.nextElementSibling.children[1].style.display = 'none';
                status.style.color = '#4caf50';
                break;
            default:
                null
        }
    }
}
statusColor();

let changeDestination = (destination) => {
    let children = destination.parentElement.parentElement.children[2].children;
    children[0].style.display = children[0].style.display != 'none' ? 'none' : 'block'
    children[1].style.display = children[1].style.display == 'none' ? 'block' : 'none'
}
