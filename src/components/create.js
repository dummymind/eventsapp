import CreateNewRequest from "./ResponsiveEvent.jsx/CreateNewRequest"
import { FormProvider } from './FormContext'

function create() {

  return (
    <FormProvider>
      <CreateNewRequest  />
    </FormProvider>
  )

}

export default create;