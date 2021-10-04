let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mob = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
    mob.classList.add('open');

});

times.addEventListener('click', function(){
    mob.classList.remove('open');

});

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    
    const email = document.getElementById('txtEmail');
    const subject = document.getElementById('txtSubject');
    const msg = document.getElementById('msg');
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        
        'Email: ' + email.value + ' \r\n ' + 
        'Subject: ' + subject.value + ' \r\n ' + 
        'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        console.log (newLink);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.btn btn-primary')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {

            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');
            }
        }
    }
}
