import React from 'react'
import mainFetch from '../../utils/mainFetch'
import { DelRoom, updateRoom } from '../../utils/fetchRooms'
import { Link } from 'react-router-dom'

function InsideRoom() {
  let id = window.location.href.split('=')[1]
  let game = window.location.href.split('=')[2]
  let gameid = window.location.href.split('=')[3]
  let loggedInUser = window.sessionStorage.getItem('username')
  const [room, setRoom] = React.useState([])
  const [host, setHost] = React.useState()
  const [isHost, setIsHost] = React.useState(false)
  const [gamersInRoom, setGamersInRoom] = React.useState([])
  const [joined, setJoined] = React.useState(false)

  // Gets all the data of the room and
  React.useEffect(() => {
    const url = `/rooms/${id}`
    mainFetch(url)
      .then((room) => {
        setRoom(room)
        console.log(room, 'first room')
        setHost(room[0].host)
        setGamersInRoom(room[0].gamers)
        setJoined(true)
        if (host) {
          getLoggedUserId()
        }
      })
      .catch((err) => {
        window.location.href = '/error'
        console.log('Error from main fetch InsideRoom Component ', err)
      })
  }, [])

  //add user who has joined to the room
  function join() {
    if (gamersInRoom.includes(loggedInUser)) {
      alert(` HI ${loggedInUser} YOU ALREDY JOINED`)
    } else {
      gamersInRoom.push(loggedInUser)

      updateRoom(id, gamersInRoom)
        .then(() => {
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  function leaveRoomUnjoin() {
    if (gamersInRoom.includes(loggedInUser)) {
      let indexOFUser = gamersInRoom.indexOf(loggedInUser)
      gamersInRoom.splice(indexOFUser, 1)
      updateRoom(id, gamersInRoom)
        .then((newroom) => {
          setRoom(newroom)
          console.log(room)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  //

  // Gets the username logged to get it's id
  const getLoggedUserId = () => {
    const url = `/user/${loggedInUser}`
    mainFetch(url)
      .then((data) => {
        if (data) {
          if (host === data.id) {
            setIsHost(true)
          } else {
            setIsHost(false)
          }
        }
      })
      .catch((err) => (window.location.href = '/error'))
  }

  const deleteRoom = (id) => {
    DelRoom(id)
    window.location.href = `rooms?gameid=${gameid}=gname=${game}`
  }

  return (
    <div className="insideroom">
      {room.map((room) => (
        <div className="insideroomm">
          <h2>{room.rname}</h2>
          <div className="buttons">
            {isHost ? (
              <button onClick={() => deleteRoom(room.id)}>Delete Room</button>
            ) : (
              ''
            )}
            <Link
              className="a"
              to={{
                pathname: '/rooms',
                search: `id=${gameid}=gname=${game}`,
              }}
              onClick={leaveRoomUnjoin}
            >
              Leave Room
            </Link>
            <button onClick={join} className="a">
              join
            </button>
          </div>

          <div className="roomdesc">
            <div className="rules-hdr">
              <h4>Room Rules : </h4>
              <p>{room.descr}</p>
            </div>

            <div className="rules">
              <h4>Standards :</h4>
              <p>Language : {room.lang}</p>
              <p>Age : {room.age}</p>
              <p>Console : {room.platform}</p>
              <p>Skills : {room.skill}</p>
            </div>
          </div>
          <div className="players">
            <ul>
              <h1> Gamers Joined The Room :</h1>
              {room.gamers
                ? room.gamers.map((plat) => <li id={plat.id}>{plat}</li>)
                : ''}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
export default InsideRoom
