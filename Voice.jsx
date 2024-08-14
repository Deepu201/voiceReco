import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const Voice = () => {

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
const voice=()=>SpeechRecognition.startListening({continuous:true,language:"en-IN"})
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
    <div>:_____________________________________________________:
      <div>hiiiiii</div>
        {transcript}
    </div>
    <button onClick={voice}>start</button>
    <button onClick={SpeechRecognition.stopListening}>stop</button>
    </>
  )
}

export default Voice
