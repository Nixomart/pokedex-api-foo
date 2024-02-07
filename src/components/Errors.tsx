import ErrorsProps from "../interfaces/ErrorProps";

export default function Errors({error}:ErrorsProps) {
  return (
    <>
      {error === 1 && 
      <div className="w-screen h-screen">
      <p  className='fixed text-red-500 text-center  w-full  smm:w-5/6'>No se pudieron obtener los datos</p>
      </div>
      }
      {error === 2 && 
      <div className="w-screen h-screen">
      <p  className='fixed text-red-500 text-center  w-full  smm:w-5/6'>No se pudo encontrar el pokemon</p>
      </div>
      }
    </>
  )
}
