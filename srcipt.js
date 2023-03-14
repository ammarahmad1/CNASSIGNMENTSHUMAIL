const darkModeToggle = document.querySelector('#dark-mode-toggle')
const textModeToggle = document.querySelector('#text-only-toggle')

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.querySelectorAll('.form-check-label').forEach(el => el.classList.toggle('dark'))
  document.querySelectorAll('.navbar-brand').forEach(el => el.classList.toggle('dark'))
  document.querySelectorAll('.bg-light').forEach(el => el.classList.toggle('bg-dark'))
  document.querySelectorAll('.navbar-light').forEach(el => el.classList.toggle('navbar-dark'))
})

textModeToggle.addEventListener('change', () => {
  document.querySelectorAll('img').forEach(el => el.classList.toggle('d-none'))
})

if ('getBattery' in navigator) {
  navigator.getBattery().then(function (battery) {
    if (battery.level <= 0.2) {
      document.body.classList.add('dark')
      document.querySelectorAll('.form-check-label').forEach(el => el.classList.add('dark'))
      document.querySelectorAll('.navbar-brand').forEach(el => el.classList.add('dark'))
      document.querySelectorAll('.bg-light').forEach(el => el.classList.add('bg-dark'))
      document.querySelectorAll('.navbar-light').forEach(el => el.classList.add('navbar-dark'))
      document.querySelectorAll('img').forEach(el => el.classList.add('d-none'))
    }
  })
}
