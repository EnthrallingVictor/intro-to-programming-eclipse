// add copyright and year

const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector('div#footerContainer')

const copyright = document.querySelector('p#copyright')

copyright.innerText = `© Victor Valdez ${thisYear}`
// copyright.classList.add('copyright')

footer.appendChild(copyright)

// add skills section

const skills = [`Programming`, `HTML`, `Javascript`, `CSS`, `Customer Support`, `Spanish`]

const skillsSection = document.querySelector('#skills')

const skillsList = skillsSection.querySelector('ul')

for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = `${skills[i]}`
    skill.classList.add('skillLvlUp')
    skillsList.appendChild(skill)
}

// Message form

const messageForm = document.querySelector('[name=leave_message]')

messageForm.addEventListener('submit', (Event) => {
    Event.preventDefault()
    const name = Event.target.name.value
    const email = Event.target.email.value
    const message = Event.target.message.value
    console.log(`${name}, ${email}, ${message}`)

    const messageSection = document.querySelector('#messages')
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href='mailto: ${email}'>${name}</a> wrote: <span>${message}</span>`
    newMessage.classList.add('newMessage')
    
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.addEventListener('click', (Event) => {
        const entry = removeButton.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)

    messageList.appendChild(newMessage)

    messageForm.reset()
})

// AJAX Code
// const githubRequest = new XMLHttpRequest()

// githubRequest.addEventListener('load', function() {
//     const repos = JSON.parse(this.response)

//     const projectSection = document.querySelector('#projects')
//     const projectList = projectSection.querySelector('ul')

//     for (let i=0; i<repos.length; i++) {
//         const project = document.createElement('li')
//         project.innerHTML = `<a href='${repos[i].html_url}'>${repos[i].name}</a>`
//         projectList.appendChild(project)
//     }
// })

// githubRequest.open('GET', 'https://api.github.com/users/EnthrallingVictor/repos')
// githubRequest.send()

fetch('https://api.github.com/users/EnthrallingVictor/repos')
    .then(res => res.json())
    .then(repos => {
        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')

        for (let i=0; i<repos.length; i++) {
            const project = document.createElement('li')
            project.innerHTML = `<a href='${repos[i].html_url}'>${repos[i].name}</a>`
            projectList.appendChild(project)
        }
    })
    .catch(error => console.log('There is an error loading the request', error))
