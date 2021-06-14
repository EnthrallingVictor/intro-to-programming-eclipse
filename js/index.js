const today = new Date()

const thisYear = today.getFullYear()

const footer = document.querySelector('footer')

const copyright = document.createElement('p')

copyright.innerHTML = `Victor Valdez ${thisYear}`

footer.appendChild(copyright)

const skills = [`Programming`, `HTML`, `Javascript`, `CSS`, `Customer Support`, `Spanish`]

const skillsSection = document.querySelector('#skills')

let skillsList = skillsSection.querySelector('ul')

for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}

