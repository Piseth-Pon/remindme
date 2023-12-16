const REMINDER = [
  {
    title: 'prepare exam',
    note: 'review javascript for final exam',
    date: '2023-06-24',
    startTime: '20:00',
    endTime: '22:00',
    priority: 'B'
  },
  {
    title: 'take final exam',
    note: 'final exam of the term',
    date: '2023-06-25',
    startTime: '14:00',
    endTime: '15:30',
    priority: 'A'
  },
  {
    title: 'have party',
    note: 'celebrate after finish the term',
    date: '2023-06-25',
    startTime: '19:00',
    endTime: '21:00',
    priority: 'C'
  },
]

// SELECT THE DOMs
const reminderForm = document.querySelector('#reminderForm')
const title = document.querySelector('#title')
const note = document.querySelector('#note')
const date = document.querySelector('#date')
const startTime = document.querySelector('#startTime')
const endTime = document.querySelector('#endTime')
const priority = document.querySelector('#priority')

const remindersWrapper = document.querySelector('.reminders-wrapper')
const amountOfReminders = document.querySelector('#amountOfReminders')

let counter = REMINDER.length
amountOfReminders.textContent = counter

for (let i = 0; i < REMINDER.length; i++) {
  let reminder = REMINDER[i]
  remindersWrapper.innerHTML += `
  <div class="reminder">
    <div class="row">
      <h4>${reminder.title.toUpperCase()}</h4>
      <span class="priority">${reminder.priority}</span>
    </div>
    <p>${reminder.note}</p>
    <p>Date: ${reminder.date}</p>
    <div class="row">
      <p>Start Time: ${reminder.startTime}</p>
      <p>End Time: ${reminder.endTime}</p>
    </div>
  </div>
  `
}



reminderForm.addEventListener('submit', (e) => {
  e.preventDefault()

  remindersWrapper.innerHTML += `
  <div class="reminder">
    <div class="row">
      <h4>${title.value}</h4>
      <span class="priority">${priority.value}</span>
    </div>
    <p>${note.value}</p>
    <p>Date: ${date.value}</p>
    <div class="row">
      <p>Start Time: ${startTime.value}</p>
      <p>End Time: ${endTime.value}</p>
    </div>
  </div>
  `

  counter = counter + 1
  amountOfReminders.textContent = counter

  title.value = ""
  note.value = ""
  date.value = ""
  startTime.value = ""
  endTime.value = ""
  priority.value = ""

})