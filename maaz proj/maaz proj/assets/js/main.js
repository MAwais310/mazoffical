//   FOR DISABLED CHECKBOXES
// var checkboxes = $('.new_chek'),
//     submitButt = $('.dis_Check');

// checkboxes.click(function() {
//     submitButt.attr("disabled", !checkboxes.is(":checked"));
// });

$('.check1').click(function() {
	if ($(this).is(':checked')) {
	  $('.submit').removeAttr('disabled');
	  $(".child_check").removeClass("chng"); 
	  
	} else {
	  $('.submit').attr('disabled', 'disabled');
	  $(".child_check").addClass("chng"); 
	}
  });

// POWER CROSS BUTTON CLOSE
window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.remove();
        // return false;
    };
};

// COMMON PART JS
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
//   Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


// (function($) { // Begin jQuery
// 	$(function() { // DOM ready
// 	  // If a link has a dropdown, add sub menu toggle.
// 	  $('nav ul li a:not(:only-child)').click(function(e) {
// 		$(this).siblings('.nav-dropdown').toggle();
// 		// Close one dropdown when selecting another
// 		$('.nav-dropdown').not($(this).siblings()).hide();
// 		e.stopPropagation();
// 	  });
// 	  // Clicking away from dropdown will remove the dropdown class
// 	  $('body').click(function() {
// 		$('.nav-dropdown').hide();
// 	  });
// 	  // Toggle open and close nav styles on click
// 	  $('#nav-toggle').click(function() {
// 		$('nav ul').slideToggle();
// 	  });
// 	  // Hamburger to X toggle
// 	  $('#nav-toggle').on('click', function() {
// 		this.classList.toggle('active');
// 	  });
// 	}); // end DOM ready
//   })(jQuery); // end jQuery


//   $("#files").change(function() {
// 	filename = this.files[0].name;
// 	console.log(filename);
//   });

//   $(function () {
// 	$('input[type="file"]').change(function () {
// 		 if ($(this).val() != "") {
// 				$(this).css('color', '#333');
// 		 }else{
// 				$(this).css('color', 'transparent');
// 		 }
// 	});
// })

// // DROP DRAG
// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
// 	const dropZoneElement = inputElement.closest(".drop-zone");
  
// 	dropZoneElement.addEventListener("click", (e) => {
// 	  inputElement.click();
// 	});
  
// 	inputElement.addEventListener("change", (e) => {
// 	  if (inputElement.files.length) {
// 		updateThumbnail(dropZoneElement, inputElement.files[0]);
// 	  }
// 	});
  
// 	dropZoneElement.addEventListener("dragover", (e) => {
// 	  e.preventDefault();
// 	  dropZoneElement.classList.add("drop-zone--over");
// 	});
  
// 	["dragleave", "dragend"].forEach((type) => {
// 	  dropZoneElement.addEventListener(type, (e) => {
// 		dropZoneElement.classList.remove("drop-zone--over");
// 	  });
// 	});
  
// 	dropZoneElement.addEventListener("drop", (e) => {
// 	  e.preventDefault();
  
// 	  if (e.dataTransfer.files.length) {
// 		inputElement.files = e.dataTransfer.files;
// 		updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
// 	  }
  
// 	  dropZoneElement.classList.remove("drop-zone--over");
// 	});
//   });
  
//   /**
//    * Updates the thumbnail on a drop zone element.
//    *
//    * @param {HTMLElement} dropZoneElement
//    * @param {File} file
//    */
//   function updateThumbnail(dropZoneElement, file) {
// 	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
// 	// First time - remove the prompt
// 	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
// 	  dropZoneElement.querySelector(".drop-zone__prompt").remove();
// 	}
  
// 	// First time - there is no thumbnail element, so lets create it
// 	if (!thumbnailElement) {
// 	  thumbnailElement = document.createElement("div");
// 	  thumbnailElement.classList.add("drop-zone__thumb");
// 	  dropZoneElement.appendChild(thumbnailElement);
// 	}
  
// 	thumbnailElement.dataset.label = file.name;
  
// 	// Show thumbnail for image files
// 	if (file.type.startsWith("image/")) {
// 	  const reader = new FileReader();
  
// 	  reader.readAsDataURL(file);
// 	  reader.onload = () => {
// 		thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
// 	  };
// 	} else {
// 	  thumbnailElement.style.backgroundImage = null;
// 	}
//   }
  
