const PostData = async (url, object = {}, meth) => {

    try {
        let res = await fetch(url, {
            method: meth,
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        })

        let data = await res.json();
        alert("Información creada")
    } catch (error) {
        alert("Hubo un error", error)
    }


}

export default PostData;