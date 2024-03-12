import { useEffect, useRef, useState } from "react"
import { GroupCard } from "./GroupCard";

interface IGListProps
{
  groups?: Group[],
  setGroups: Function
}

export const GroupList = ({groups, setGroups} : IGListProps) => {

  const [rejected, setRejected] = useState<boolean>(false)

  /*
   * Не знал как использовать тип GetGroupsResponse, поэтому решил сделать асинк метод для его получения
   * Изначально всё что находится в этом методе было в useEffect-хуке
   */
  const getGroups = async () : Promise<GetGroupsResponse> =>
  {
    let _responce : GetGroupsResponse = {result: 0}
    await fetch(`https://65dbadf83ea883a1529217c3.mockapi.io/api/groups`)
    .then(
      res => {
        _responce.result = res.ok ? 1 : 0
        return res.json()
      }
    )
    .then(
      data => {
        _responce.data =  data
      }
    )

    return new Promise<GetGroupsResponse>((res, rej) => {
      if(_responce.result == 0) return rej("400")
      return res(_responce)
    }) 
  }

  useEffect(() => {
    (async() => {
      getGroups()
      .then(
        res => setGroups(res.data)
      )
      .catch(
        err => setRejected(true)
      )
    })()
  }, [])

  
  return (
    <div className="groups">
      {
        rejected
        ?
        <a>Bad request, 400 error </a>
        :
        groups?.map((group, index) => {
          return(
            <div key={index}>
              <GroupCard group={group}/>
            </div>
          )
        })
      }
    </div>
  )
}