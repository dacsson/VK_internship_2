// import { makeAutoObservable } from "mobx"

// export class Timer {
//     secondsPassed = 0

//     constructor() {
//         makeAutoObservable(this)
//     }

//     increaseTimer() {
//         this.secondsPassed += 1
//     }
// }

interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}
  
interface Group {
  id: number,
  name: string,
  closed: boolean,
  avatar_color?: string,
  members_count: number,
  friends?: User[]
}

interface User {
  first_name: string,
  last_name: string
}