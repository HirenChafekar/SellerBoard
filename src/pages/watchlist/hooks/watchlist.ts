import { useNavigate } from "react-router-dom"

export const useWatchlist= () => {
    const navigate = useNavigate();

    return {
        functions: {
            navigate
        }
    }
}