import Event from "./Event"
import useFormContext from "./useFormContext"
import Schedule from "./Schedule"
import Guests from "./Guests"
import Summary from "./Summary"
import History from "./History"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Event />,
        1: <Schedule />,
        2: <Guests />,
        3: <History />,
        4: <Summary />
    }

    const content = (
        <>
            {display[page]}
        </>
    )


    return content
}
export default FormInputs