interface Props {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Docs = ({ params, searchParams }: Props) => {
  console.log(params, searchParams)

  return <h1>Docs page</h1>
}

export default Docs
