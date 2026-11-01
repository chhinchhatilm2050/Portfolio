import { useState, useEffect } from 'react'

interface TypingAnimationOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypingAnimation(
  words: string[],
  {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
  }: TypingAnimationOptions = {}
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const currentFullWord = words[currentWordIndex % words.length]

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < currentFullWord.length) {
          setCurrentText(currentFullWord.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
          return
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentFullWord.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          return
        }
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  // Explicitly return { text: currentText } so destructuring { text: typedRole } works perfectly
  return { text: currentText }
}