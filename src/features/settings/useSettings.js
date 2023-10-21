import { useQuery } from "@tanstack/react-query";
import {getSettings as getSettingsAPI} from "../../services/apiSettings"

export function useSettings() {
const {isLoading, error, data:settings} = useQuery({
  queryKey:["settings"],
    queryFn: getSettingsAPI
})

return{isLoading, error, settings}
}
