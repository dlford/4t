export const audioCtx = new AudioContext()

export default function playSound(): void {
  const o = audioCtx.createOscillator()
  const g = audioCtx.createGain()
  o.start(0)
  o.frequency.value = 830.6
  o.connect(g)
  g.connect(audioCtx.destination)
  g.gain.exponentialRampToValueAtTime(
    0.0001,
    audioCtx.currentTime + 0.1,
  )
}
