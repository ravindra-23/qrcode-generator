// Selectors
const form = document.getElementById('generate-form')
const qrCode = document.getElementById('qrcode')
const spinner = document.getElementById('spinner')


// Functions

// Button submit
const handleSubmit = (e) => {
    e.preventDefault();
    clearUI();

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value
    console.log(url, size)

    // validate URL
    if(url === '') {
        alert('Please Enter a URL')
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRcode(url, size)

            setTimeout(() => {
                const saveUrl = document.querySelector('img').src
                createSaveBtn(saveUrl)
            }, 50)
        }, 1000)
    }
}

// show spinner
const showSpinner = () => {
    spinner.style.display = 'block'
}

// hide spinner
const hideSpinner = () => {
    spinner.style.display = 'none'
}

// generate QR code
const generateQRcode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
}

// clear UI
const clearUI = () => {
    qrCode.innerHTML = ''
    const saveLink = document.getElementById('save-link')
    if(saveLink) saveLink.remove();
}

// create save button

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'save-link'
    link.href = saveUrl
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
    link.download = 'qrcode'
    link.innerHTML = 'Save Image'
    document.getElementById('generated').appendChild(link)
}


hideSpinner();
// Event Listeners

form.addEventListener('submit', handleSubmit)