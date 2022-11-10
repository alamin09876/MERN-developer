import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-courses-service`;
    }, [title])
}

export default useTitle;
