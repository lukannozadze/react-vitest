type Props = {
    isDisabled:boolean
}

export default function ButtonsContainer({isDisabled}:Props) {

  return (
    <div className="container">
     <button disabled={isDisabled} style={{backgroundColor:'green'}} className="button-1">Button 1</button>
     <button disabled={isDisabled} className="button-2">Button 2</button>
     <button disabled={isDisabled} className="button-3">Button 3</button>
   </div>
  )
}
