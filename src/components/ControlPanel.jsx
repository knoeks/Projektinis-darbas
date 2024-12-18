import DeleteButton from "./DeleteButton"

function ControlPanel({ film }) {
  return (

      <div className="flex flex-col justify-between items-center absolute top-1/2 -translate-y-1/2 left-2 md:left-4 p-2 z-50 h-4/5 xl:h-2/3 bg-dark bg-opacity-75 rounded-[1.78125rem]">
        <DeleteButton film={film} />
      </div>

  )
}

export default ControlPanel