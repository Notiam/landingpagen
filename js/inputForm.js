const inputForm = document.getElementById('subscriber-form')
const nameInput = document.getElementById('nameInput');
const sdtInput = document.getElementById('sdtInput');
inputForm.onsubmit = e => {
    e.preventDefault();
    console.log(nameInput.value)
    console.log(sdtInput.value)
}