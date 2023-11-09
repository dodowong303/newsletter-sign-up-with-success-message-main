const validateEmailField = (field) => {
    const hasError = field.validationMessage != ''

    return hasError
}

const hideErrors = (field, elements) => {
    field.classList.remove("error")
    elements.forEach(ele => ele.classList.add("hidden"))
}

const showErrors = (field, elements) => {
    field.classList.add("error")
    elements.forEach(ele => ele.classList.remove("hidden"))
}

const toggleDisplay = () => {
    const modals = Array.from(document.getElementsByClassName("card"))
    modals.forEach(modal => modal.classList.toggle("hidden"))
}
const submit = () => {
    const field = document.getElementById("email")
    const errorElements = Array.from(document.getElementsByClassName("error-message"))

    hideErrors(field, errorElements)
    //error-message
    
    const hasError = validateEmailField(field)
    console.log(hasError)
    if (hasError) {
        showErrors(field, errorElements)
        
    } else {
        toggleDisplay()
        const valueField = document.getElementById("email-value")
        valueField.innerText = field.value
    }
}

const dismissModal = () => {
    const field = document.getElementById("email")
    toggleDisplay()
    field.value = ''

}