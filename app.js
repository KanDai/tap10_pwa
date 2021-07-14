// 変数定義
let isPlaying = false
let tapCount, time = 0
const tapBtn    = document.getElementById('js-tapBtn')
const startBtn  = document.getElementById('js-startBtn')
const tweetBtn  = document.getElementById('js-tweetBtn')
const countText = document.getElementById('js-count')
const timeText  = document.getElementById('js-time')

// ゲームの初期値設定
const setGame = () => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time / 1000
}
setGame()

// タップした時にカウントを増やす
tapBtn.addEventListener('click', () => {
  if (!isPlaying) return false
  tapCount++
  countText.innerText = tapCount
})

// STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click', () => {
  setGame()
  isPlaying = true
  tapBtn.disabled = false
  startBtn.style.display = 'none'
  tweetBtn.style.display = 'none'

  const timer = setInterval( () => {
    time -= 10
    timeText.innerHTML = (time / 1000).toFixed(2)

    if (time === 0) {
      clearInterval(timer)
      isPlaying = false
      startBtn.style.display = 'inline-block'
      tweetBtn.style.display = 'inline-block'
      startBtn.innerText = 'もう一回'
    }
  }, 10)
})

// 結果をつぶやく
tweetBtn.addEventListener('click', () => {
  const text = encodeURIComponent('10秒間で' + tapCount + '回タップしました')
  const hashtags = encodeURIComponent('10秒で何回タップできるか')
  const url = encodeURIComponent('https://tap10.netlify.app/')
  const payload = `text=${text}&hashtags=${hashtags}&url=${url}`
  window.open('https://twitter.com/intent/tweet?' + payload, '_blank');
})