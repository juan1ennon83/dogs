const regexURL = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    // opcion de subir desde mi directorio local (JPEG, PNG)  ??
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;

const Validate = (form) => {
    let isError = false;
    let error = {};
    if (form.name.length <= 3) {
        error.name = "Name cannot be less than 3 letters";
        isError = true;
    } else if (!regexName.test(form.name)) {
        error.name = "The name can only contain letters and spaces";
        isError = true;
    }
    if (!regexURL.test(form.image)) {
        error.image = "The URL entered is not correct";
        isError = true;
    }
    if (form.minHeight <= 0 || parseInt(form.minHeight) >= parseInt(form.maxHeight)) {
        error.minHeight = "The minimum height cannot be less than 0 or greater than the maximum height";
        isError = true;
    }
    else if (form.minHeight > 100) {
        error.minHeight = "The height cannot exceed 100 centimeters";
        isError = true;
    }
    if (form.maxHeight <= 0 || parseInt(form.minHeight) >= parseInt(form.maxHeight)) {
        error.maxHeight = "The maximum height cannot be less than 0 or less than the minimum height";
        isError = true;
    } else if (form.maxHeight > 100) {
        error.minHeight = "The height cannot exceed 100 centimeters";
        isError = true;
    }
    if (form.minWeight <= 0 || parseInt(form.minWeight) >= parseInt(form.maxWeight)) {
        error.minWeight = "The minimum weight cannot be less than 0 or greater than the maximum weight";
        isError = true;
    } else if (form.minWeight > 100) {
        error.minHeight = "The weight cannot exceed 100 kilograms";
        isError = true;
    }
    if (form.maxWeight <= 0 || parseInt(form.minWeight) >= parseInt(form.maxWeight)) {
        error.maxWeight = "The maximum weight cannot be less than 0 or less than the minimum weight";
        isError = true;
    } else if (form.minWeight > 100) {
        error.minHeight = "The weight cannot exceed 100 kilograms";
        isError = true;
    }
    if (form.minLifeSpan <= 0 || parseInt(form.minLifeSpan) >= parseInt(form.maxLifeSpan)) {
        error.minLifeSpan = "The minimum life span cannot be less than 0 or greater than the maximum life span";
        isError = true;
    } else if (form.minLifeSpan > 20) {
        error.minLifeSpan = "The life span cannot exceed 20 years";
        isError = true;
    }
    if (form.maxLifeSpan <= 0 || parseInt(form.minLifeSpan) >= parseInt(form.maxLifeSpan)) {
        error.maxLifeSpan = "The maximum life span cannot be less than 0 or less than the minimum life span";
        isError = true;
    } else if (form.maxLifeSpan > 20) {
        error.maxLifeSpan = "The life span cannot exceed 20 years";
        isError = true;
    }
    if (form.temperaments.length <= 0) {
        error.temperaments = "You must assign at least one temperament"
        isError = true;
    }
    return isError ? error : null;
}

export default Validate;