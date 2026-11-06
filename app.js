const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		}else{
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))



const observerr = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('sideleft');
    } else {
      entry.target.classList.remove('sideleft');
    }
  });
});

const targetElements = document.querySelectorAll('.left-side');
targetElements.forEach((el) => observerr.observe(el));


const right = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('sideright');
    } else {
      entry.target.classList.remove('sideright');
    }
  });
});

const targettElements = document.querySelectorAll('.right-side');
targettElements.forEach((el) => right.observe(el));