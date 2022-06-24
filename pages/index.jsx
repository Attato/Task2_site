import React from 'react'
import Head from 'next/head'
import Header from 'components/header'

const Index = () => {
    return (
        <>
            <Head>
                <title>Jupiter Task</title>
            </Head>

            <div className="background__primary">
                <Header/>
            </div>
        </>
    )
}

export default Index;