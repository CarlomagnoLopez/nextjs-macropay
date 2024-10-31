import TeamList from '../components/TeamList';



export default function Team() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* <div>PAgina 2</div> */}
            <TeamList></TeamList>
          </div>
        </main>
      </div>
    </>
  )
}