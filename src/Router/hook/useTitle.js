import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Book Store`;
    }, [title])
};

export default useTitle;