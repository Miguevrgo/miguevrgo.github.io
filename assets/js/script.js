'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

if (lastClickedBtn) {
    for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });
    }
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        // check form validation
        if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
        } else {
        formBtn.setAttribute("disabled", "");
        }

    });
    }
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Skills data
const skills = [
    { name: 'C++ [11/14/17/20/23]', level: 'Advanced', icon: 'devicon-cplusplus-plain' },
    { name: 'Rust', level: 'Advanced', icon: 'devicon-rust-plain' },
    { name: 'C', level: 'Proficient', icon: 'devicon-c-plain' },
    { name: 'Python', level: 'Competent', icon: 'devicon-python-plain' },
    { name: 'Java', level: 'Competent', icon: 'devicon-java-plain' },
    { name: 'ARM Assembly', level: 'Competent', icon: 'devicon-aarch64-plain' }
];

const skillsList = document.querySelector('.skills-list');

if (skillsList) {
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.classList.add('skills-item');

        const icon = document.createElement('i');
        icon.className = skill.icon;

        const titleWrapper = document.createElement('div');
        titleWrapper.classList.add('title-wrapper');

        const title = document.createElement('h5');
        title.classList.add('h5', 'title');
        title.textContent = skill.name;

        const level = document.createElement('span');
        level.classList.add('skill-level');
        level.textContent = skill.level;

        titleWrapper.appendChild(title);
        titleWrapper.appendChild(level);
        listItem.appendChild(icon);
        listItem.appendChild(titleWrapper);
        skillsList.appendChild(listItem);
    });
}
