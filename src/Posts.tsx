import { useEffect, useRef, useState } from "react";

type PostType = {
    id: number,
    title: string,
    body: string
}

//let id=setInterval(fun,2000)
//clearInterval(id);

const Posts = () => {

    let ac=useRef<AbortController|undefined>(undefined);

    const [posts, setPosts] = useState<PostType[] | undefined>(undefined);
    const [isLoading, setLoading] = useState(false);
    const [page,setPage]=useState(1);


    useEffect(() => {

        setLoading(true);
        ac.current?.abort();
        ac.current=new AbortController();


        fetch("https://jsonplaceholder.typicode.com/posts?_page="+page+"&_limit=10",{
            signal:ac.current?.signal
        })
            .then((response) => {
                return response.json();

            }).then((response) => {
                setPosts(response);
                setLoading(false);



            })


    }, [page])

    // if (isLoading)
    //     return (
    //         <>
    //             Loading...
    //         </>)

    return (

        <>
        <div>
            Page:{page}
        <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.map((item) => {
                            return (

                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </>
    )


}
export default Posts;
