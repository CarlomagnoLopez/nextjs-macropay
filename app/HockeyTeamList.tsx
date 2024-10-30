function HockeyTeamItem({ itemList }) {
  return (
    <li key={itemList.email} className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={itemList.image} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{itemList.name}</p>
        <p className="text-sm text-gray-500">{itemList.email}</p>
      </div>
    </li>
  )
}

export default function HockeyTeamList({ people }) {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((item) => <HockeyTeamItem key={item.id} itemList={item} />)}
    </ul>
  )
}