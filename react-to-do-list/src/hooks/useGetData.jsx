import { useEffect } from "react";
import axios from 'axios'

function useGetData(itemId, count, skip, onDataLoaded) {

    const baseUrl = 'https://dummyjson.com/todos';
    const fakeTimeout = 1000;

    let getUrl = baseUrl + (itemId !== null ? ('/' + itemId) 
    : '?limit=' + count + '&skip=' + skip);
    
    useEffect(() => {
        onDataLoaded(null);
        axios.get(getUrl)
    .then((repos) => {
        setTimeout(() => {
        const allRepos = repos.data;
        onDataLoaded(allRepos);
        }, fakeTimeout)
      })
    .catch(function (error) {
        console.log(error.toJSON());
    })
    }, []);
}


export default useGetData;