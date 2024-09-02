type VickyProps = {
  text: string
}

export const Vicky = ({ text }: VickyProps) => {
  return (
    <>
      {!!text && (
        <div className="mt-5 flex flex-col items-center bg-white rounded-md">
          <span className="mt-2 w-72 text-center break-keep text-black">
            {text}
          </span>
        </div>
      )}
    </>
  )
}
