const today = new Date()

const thisYear = today.getFullYear()

const footer = document.querySelector('footer')

const copyright = document.createElement('p')

copyright.innerText = `© Victor Valdez ${thisYear}`
copyright.classList.add('copyright')

footer.appendChild(copyright)

const skills = [`Programming`, `HTML`, `Javascript`, `CSS`, `Customer Support`, `Spanish`]

const skillsSection = document.querySelector('#skills')

const skillsList = skillsSection.querySelector('ul')

for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = `⇪ ${skills[i]} ⇪`
    skill.classList.add('skillLvlUp')
    skillsList.appendChild(skill)
}

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

