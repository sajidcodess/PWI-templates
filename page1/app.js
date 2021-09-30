// grabbing html Elements 
const dropdownBtn = document.querySelector(".lmdropdownBtn")
const ceretRight = document.querySelector(".lmdropdownBtn span")
const dropdownList = document.querySelector(".lmdropdown-list")
const dropdownItems = document.querySelectorAll(".lmlist-item")
const leftSide = document.querySelector(".lmcol-1")
const menuToggler = document.querySelector(".lmMenu-toggler")

// dropdownLists
dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("active")
    ceretRight.classList.toggle("active")
})
console.log(dropdownList)


dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
        dropdownList.classList.toggle("active")
    })
})

// toggle hamburger menu 
menuToggler.addEventListener("click", () => {
    leftSide.classList.toggle("active")
    console.log(leftSide)
})
