import React, { useEffect } from 'react'

const UseEffectFetchingAndLists = () => {
    const [data, setData] = React.useState(null);

    function dataFetching() {
         fetch('https://dummyjson.com/users?limit=15&select=id,firstName,lastName')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        dataFetching();
    }, [])

    function removeClickHandler () {
        setData(null)
    }

    function fetchClickHandler () {
        dataFetching();
    }

    let fruits = ['Orange', 'Mangoes', 'Banana']
    let fruitsObject = [
        { name: 'Orange' },
        { name: 'Mangoes' },
        { name: 'Banana' }]

        fruitsObject = ''

    console.log(data)
    return (
        <div>
            <div>
                {
                  fruitsObject ? (fruitsObject.map((data) => {
                        console.log(data)
                        return (
                            <p key={data.name}>{data.name}</p>
                        )
                    })) : ''
                }
            </div>

              <button onClick={removeClickHandler}>Click To Remove Fetched Data</button>
              <button onClick={fetchClickHandler}>Click To Fetch Fetched Data</button>

            <ul>
                {
                    data ? (data.map((d) => {
                        return (

                            <li key={d.id}>
                                {/* <p></p> */}
                                <p>{d.id + ': ' + d.firstName + ' ' + d.lastName}</p>
                            </li>
                        )
                    })) : (<p> No Data Found</p>)
                }
            </ul>
        </div>
    )
}

export default UseEffectFetchingAndLists