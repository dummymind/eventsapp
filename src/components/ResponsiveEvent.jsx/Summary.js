
import calendaricon from '../../images/vector_x2.svg'
import useFormContext from "./useFormContext.js"

const Summary = () => {

  const { eventFormData, handleChange } = useFormContext()

  const content = (
    <>


      <div className="col-md-10 mb-5">
        <div class=" bg-light rounded p-3 mt-3">
          <div className="file-drop-area">
            <span className="choose-file-button">+</span>
            <span className="file-message col-md-6">
            Click here to upload files <div>or drag &amp; drop files in this zone</div>
            </span>
            <input className="file-input" type="file" multiple="" />
          </div>
        </div>
      </div>
    </>
  )
  return content
}
export default Summary;