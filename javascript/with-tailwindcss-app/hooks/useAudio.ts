import { useEffect, useState } from 'react'

export default function useAudio(url: string) {
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [isPlaying, setIsPlaying] = useState(false)

  const pause = () => setIsPlaying(false)
  const play = () => setIsPlaying(true)

  useEffect(() => {
    if (audio) isPlaying ? audio.play() : audio.pause()
  }, [isPlaying])

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setIsPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setIsPlaying(false))
      }
    }
  }, [audio])

  return { isPlaying, play, pause }
}
