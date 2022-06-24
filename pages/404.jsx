import Head from 'next/head'

const Error = () => {
    return (
        <>      
            <Head>
                <title>404 Not Found</title>
            </Head> 
            <div className="error">Ошибка</div>
        </>
    )
}

export default Error;