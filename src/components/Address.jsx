import axios from "axios"

export const getServerSideProps = async () => {
  const { data: address } = await axios("http://localhost:3000/api/addresses")

  return {
    props: { address },
  }
}
const Address = ({ address }) => (
  <>
    <h1>{address.locationType}</h1>
  </>
)

export default Address
