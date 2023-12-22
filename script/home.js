const customExpiryDate = document.querySelector('[data-name="customDate"]');

const expiryDateInput = customExpiryDate.nextElementSibling;

customExpiryDate.onclick = () => {
  expiryDateInput.showPicker();
};

expiryDateInput.onchange = (e) => {
  const selectedDate = new Date(e.target.value);
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const year = selectedDate.getFullYear().toString().slice(-2);
  customExpiryDate.innerText = `${month} / ${year}`;
};
