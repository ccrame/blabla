import { useEffect, useState } from "react";

export function useApi(id) {
  const [state, setState] = useState({ response: null, isLoading: false });

  useEffect(() => {
    if (!id) return;

    setState(prev => ({ ...prev, isLoading: true }));

    fetch("http://dummy.restapiexample.com/api/v1/employees", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setState({
          isLoading: false,
          response: data
        });
      });
  }, [id]);

  return state;
}
