import { useGetLatestReleaseQuery } from './home-service'

export function Home() {
  const { data, isLoading, isFetching } = useGetLatestReleaseQuery()

  if (isLoading) return <div>Loading...</div>

  if (isFetching) return <div>Fetching...</div>

  if (data)
    return (
      <div className="tw-flex tw-flex-col tw-w-96">
        <div className="tw-flex tw-flex-row tw-justify-around">
          <div>
            <p>Month: {data.fspRelease?.month}</p>
            <p>Year: {data.fspRelease?.year}</p>
            <p>Type: {data.fspRelease?.type}</p>
          </div>
          <div>
            <p>Month: {data.regRelease?.month}</p>
            <p>Year: {data.regRelease?.year}</p>
            <p>Type: {data.regRelease?.type}</p>
          </div>
        </div>
      </div>
    )

  return <></>
}
