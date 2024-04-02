import React from 'react'

export default function About() {
  return (
    <div className='mx-w-6xl mx-auto p-3 space-y-4'>
        <h1 className='text-2xl font-medium text-amber-600'>About</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil delectus deserunt animi neque nemo ea obcaecati! Aspernatur nemo saepe in provident nostrum ad. Dolore corrupti in velit delectus blanditiis numquam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil delectus deserunt animi neque nemo ea obcaecati! Aspernatur nemo saepe in provident nostrum ad. Dolore corrupti in velit delectus blanditiis numquam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil delectus deserunt animi neque nemo ea obcaecati! Aspernatur nemo saepe in provident nostrum ad. Dolore corrupti in velit delectus blanditiis numquam.</p>
    </div>
  )
}

/**
 * In the application, after creating the page.jsx in the about folder,
 * I don't see any apparent way of linking the component with the <layout className="tsx".
 * But the page is still successfully being rendered. How?
 */
