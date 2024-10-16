type Props = {
isDisabled:boolean
setIsDisabled:React.Dispatch<React.SetStateAction<boolean>>
}

export default function EnableButton({isDisabled,setIsDisabled}:Props) {
  return (
    <button onClick={()=>{
        setIsDisabled(!isDisabled)
       }}>{isDisabled?'Enable':'Disable'}</button>
  )
}
