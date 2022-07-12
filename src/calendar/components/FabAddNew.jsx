import { addHours, set } from "date-fns"
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

const{openDateModal}= useUiStore()
const {setActiveEvent} = useCalendarStore()

const handleClickNew = () =>{
    setActiveEvent({
        title: "hola",
        notes: "Camila",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: "#fafafa",
        user: {
          _id: "123",
          name: "Robert"
        }
    });
    openDateModal();
}

  return (
    <div
        className="btn btn-primary fab"
        onClick={handleClickNew}
    >
      <i className="fas fa-plus"></i>
    </div>
  )
}


