import '../App.css'

interface IGCardProps
{
  group: Group
}

export const GroupCard = ({group} : IGCardProps) =>
{
  return(
    <div className='group-card'>
      <div className='header'>
        <div className='logo' style={{ backgroundColor: `${group.avatar_color}` }}/>
        <h1>{group.name}</h1>
      </div>
      <p><b>Тип сообщества: </b>{group.closed ? <a>Закрытое</a> : <a>Открытое</a>}</p>
      <p><b>Подписчиков: </b>{group.members_count}</p>
      <div className='friends'>
        <a><b>Друзья в сообществе: </b></a>
        {
          group.friends ===  undefined
          ?
          <a>0</a>
          :
          group.friends?.map((user, index) => {
            return(
              <div key={index}>{user.first_name} {user.last_name}</div>
            )
          })
        }
      </div>
    </div>
  )
}