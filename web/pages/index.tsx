import React from 'react'
type HomeProps = {
  count: number
}
const Home = ({ count }: HomeProps) => {
  return <div>{`Contagem: ${count}`}</div>
}
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count,
    },
  }
}

export default Home
