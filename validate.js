function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let gender = document.forms["myForm"]["gender"].value;
  let dob = document.forms["myForm"]["dob"].value;
  let nationality = document.forms["myForm"]["nationality"].value;
  let marital = document.forms["myForm"]["marital"].value;
  let kids = document.forms["myForm"]["kids"].value;
  let employed = document.forms["myForm"]["employed"].value;
  let income = document.forms["myForm"]["income"].value;
  let sponsor = document.forms["myForm"]["sponsor"].value;
  let criminal = document.forms["myForm"]["criminal"].value;
  if (
    fname == "" ||
    lname == "" ||
    gender == "" ||
    dob == "" ||
    nationality == "" ||
    income == "" ||
    sponsor == "" ||
    marital == "" ||
    kids == "" ||
    employed == "" ||
    criminal == ""
  ) {
    alert("Please ensure all fields are filled");
    return false;
  }
  let x = document.forms["myForm"]["fname"].value;
}
