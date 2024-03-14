import React, { useState } from 'react'

function Random() {
  const [typeofcolor, setTypeOfColor] = useState('')
  const [color, setColor] = useState('#000000')

  function randomLength(length) {
    return Math.floor(Math.random() * length)
  }

  function randomRgb() {
    const r = randomLength(256)
    const g = randomLength(256)
    const b = randomLength(256)

    setColor(`rgb(${r},${g}, ${b})`)
  }

  function randomHex() {
    let color = '#'
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
      color += hex[randomLength(15)]
    }
    setColor(color)
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen "
      style={{ background: color }}
    >
      <div className="flex flex-col items-center justify-center w-full mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Color Generator</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setTypeOfColor('hex')}
            className={`px-6 py-3 rounded-md font-bold text-white ${
              typeofcolor === 'hex'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Select HEX color
          </button>
          <button
            onClick={() => setTypeOfColor('rgb')}
            className={`px-6 py-3 rounded-md font-bold text-white ${
              typeofcolor === 'rgb'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Select RGB color
          </button>
          <button
            onClick={typeofcolor === 'hex' ? randomHex : randomRgb}
            className="px-6 py-3 rounded-md font-bold text-white bg-blue-500 hover:bg-blue-600"
          >
            Generate Color
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-white mb-4">{typeofcolor}</h2>
        <h2 className="text-3xl font-bold text-white">{color}</h2>
      </div>
    </div>
  )
}

export default Random
