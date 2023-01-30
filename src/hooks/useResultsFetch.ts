
import useSWR from 'swr'
import { ResultsRequest } from '../request/ResultsRequests';

type props = {
     result: string
}

const useResultsFetch = ({result}: props) => {
     return useSWR(`${result}`, ResultsRequest);
};

export default useResultsFetch;