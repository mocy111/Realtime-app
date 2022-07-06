import React from 'react'
import './ImageSearchForm.css'
const ImageSearchForm = ({handleChange,handleSubmit}) => {
    
    return (
        <div className="ma5 to">
          <div className="center">
            <div className="form center pa4 br3 shadow-5">
              <input className="f4 pa2 w-70 center" type="text" onChange={handleChange} />
              <button className="w-30 grow f4 link ph3 pv2 dib white bg-primary" onClick={handleSubmit}>
                Detect
              </button>
            </div>
          </div>
      </div>
    )
}

export default ImageSearchForm
