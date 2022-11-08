import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `${title} -Dr.Abdul Jolil`;
    },[title])
}
export default useTitle;