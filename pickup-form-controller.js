function swapCheckbox() {
  var checkboxes = document.getElementsByName(event.target.name);
  if (event.target === checkboxes[0]) {
    if (checkboxes[0].checked === true) {
      checkboxes[1].checked = false;
    }
  } else {
    if (checkboxes[1].checked === true) {
      checkboxes[0].checked = false;
    }
  }
}

function setDate() {
  var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;

  document.getElementsByClassName('dateOfBirth')[0].value = year + month + day;
}

function setAges() {
  var relationships = [
    document.getElementById('relationship_1').value,
    document.getElementById('relationship_2').value,
    document.getElementById('relationship_3').value,
    document.getElementById('relationship_4').value,
    document.getElementById('relationship_5').value,
    document.getElementById('relationship_6').value
  ]
  var ages = '';
  for (var i = 0; i < relationships.length; i++) {
    if (relationships[i]) {
      if (ages.length > 0) {
        ages += ', ';
      }
      ages += relationships[i];
    }
  }
  document.getElementsByClassName('ages')[0].value = ages;
}

window.onload = function() {
  $('#zip').keyup(function(e){
    if (this.value.length >= 4) {
      if (!this.value.includes('-')) {
        this.value = this.value.slice(0, 3) + '-' + this.value.slice(3);
      }
    } else {
      if (this.value.includes('-')) {
        this.value = this.value.replace('-','');
      }
    }
  });
}

<!-- Validation Script on submit form-->
function validation(form) {
  setAges();
  var err = false;
  if(form.last_name.value == '' || form.first_name.value == '') {
    form.last_name.focus();
    document.getElementById('name_err_msg').hidden = false;
    err = true;
  }
  if(form.zip.value == '') {
    if (!err) {form.zip.focus();}
    document.getElementsByName('zip')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form['00N5F000006Yz1I'].value == '') {
    if (!err) {form['00N5F000006Yz1I'].focus();}
    document.getElementById('dob_err_msg').hidden = false;
    err = true;
  }
  if(form.email.value == '') {
    if (!err) {form.email.focus();}
    document.getElementsByName('email')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form.phone.value == '') {
    if (!err) {form.phone.focus();}
    document.getElementsByName('phone')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form['00N5F000006Yz1c'].value == '') {
    form['00N5F000006Yz1c'].focus();
    document.getElementsByName('00N5F000006Yz1c')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(!form['00N5F000006Yz4v'][0].checked && !form['00N5F000006Yz4v'][1].checked) {
    var targets = document.getElementsByName('00N5F000006Yz4v');
    if (!err) {form['00N5F000006Yz4v'][0].focus()};
    targets.forEach(
      function(el){
        if (el.localName === 'label') {
          el.hidden = false;
        }
      }
    )
    err = true;
  }

  if(!form['00N5F000006Yz50'][0].checked && !form['00N5F000006Yz50'][1].checked) {
    var targets = document.getElementsByName('00N5F000006Yz50');
    if (!err) {form['00N5F000006Yz50'][0].focus()};
    targets.forEach(
      function(el){
        if (el.localName === 'label') {
          el.hidden = false;
        }
      }
    )
    err = true;
  }

  if(!form['00N5F000006Yz55'][0].checked && !form['00N5F000006Yz55'][1].checked) {
    var targets = document.getElementsByName('00N5F000006Yz55');
    if (!err) {form['00N5F000006Yz55'][0].focus()};
    targets.forEach(
      function(el){
        if (el.localName === 'label') {
          el.hidden = false;
        }
      }
    )
    err = true;
  }
  if(!form.C1.checked) {
    form.C1.focus();
    document.getElementById('c1_err_msg').hidden = false;
    err = true;
  }

  return err ? false : true;
}

function bentoValidation(form){
  var err = false;
  if(form.last_name.value == '' || form.first_name.value == '') {
    form.last_name.focus();
    document.getElementById('name_err_msg').hidden = false;
    err = true;
  }
  if(form.zip.value == '') {
    if (!err) {form.zip.focus();}
    document.getElementsByName('zip')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form.email.value == '') {
    if (!err) {form.email.focus();}
    document.getElementsByName('email')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form.phone.value == '') {
    if (!err) {form.phone.focus();}
    document.getElementsByName('phone')[0].nextElementSibling.hidden = false;
    err = true;
  }
  if(form['00N5F000006Yz1c'].value == '') {
    form['00N5F000006Yz1c'].focus();
    document.getElementsByName('00N5F000006Yz1c')[0].nextElementSibling.nextElementSibling.hidden = false;
    err = true;
  }
  if(!form.C1.checked) {
    form.C1.focus();
    document.getElementById('c1_err_msg').hidden = false;
    err = true;
  }
  return err ? false : true;
}
