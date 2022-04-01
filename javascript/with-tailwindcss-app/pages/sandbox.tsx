import useAudio from '../hooks/useAudio'

export default function Sandbox() {
  const audio = useAudio('/0001041.mp3')

  const onClickAudioButton = () =>
    audio.isPlaying ? audio.pause() : audio.play()

  return (
    <button onClick={onClickAudioButton}>
      click for audio {audio.isPlaying ? 'pause' : 'play'}
    </button>
  )
}
