import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const Voice = () => {

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
    <div>
        {transcript}
    </div>
    <button onClick={SpeechRecognition.startListening}>start</button>
    <button onClick={SpeechRecognition.stopListening}>stop</button>
    </>
  )
}

export default Voice
