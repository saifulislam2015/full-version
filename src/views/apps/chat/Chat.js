// ** React Imports
import ReactDOM from 'react-dom'
import { useState, useEffect, useRef, createRef } from 'react'

import './Chat.css'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteMsg, editMsg, sendMsg, starMsg } from './store'
import { useDispatch } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MessageSquare, Menu, PhoneCall, Video, Search, MoreVertical, Mic, Image, Send } from 'react-feather'

// ** Reactstrap Imports
import {
  Form,
  Label,
  Input,
  Button,
  InputGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroupText,
  UncontrolledDropdown
} from 'reactstrap'

const ChatLog = props => {
  // ** Props & Store
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft } = props
  const { userProfile, selectedUser } = store

  // ** Refs & Dispatch
  const chatArea = useRef(null)
  const dispatch = useDispatch()

  // ** State
  const [msg, setMsg] = useState('')
  const [visible, setVisible] = useState(false)
  //const [reply, setReply] = useState(false)
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
  const [selected, setSelected] = useState(null)
  const [sender, setSender] = useState(null)
  const [op, setOp] = useState('')
  const ref = createRef()

  // ** Scroll to chat bottom
  const scrollToBottom = () => {
    const chatContainer = ReactDOM.findDOMNode(chatArea.current)
    chatContainer.scrollTop = Number.MAX_SAFE_INTEGER
  }

  // ** If user chat is not empty scrollToBottom
  useEffect(() => {
    const selectedUserLen = Object.keys(selectedUser).length
    if (selectedUserLen) {
      scrollToBottom()
    }
  }, [selectedUser])

  // ** Formats chat data based on sender
  const formattedChatData = () => {
    let chatLog = []
    if (selectedUser.chat) {
      chatLog = selectedUser.chat.chat
    }

    const formattedChatLog = []
    let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: []
    }
    //console.log(chatLog)
    chatLog.forEach((msg, index) => {
      if (chatMessageSenderId === msg.senderId) {
        msgGroup.messages.push({
          msg: msg.message,
          time: msg.time,
          repliedTo: msg.repliedTo !== undefined ? msg.repliedTo : null,
          starred : msg.starred !== undefined ? msg.starred : null
        })
      } else {
        chatMessageSenderId = msg.senderId
        formattedChatLog.push(msgGroup)
        msgGroup = {
          senderId: msg.senderId,
          messages: [
            {
              msg: msg.message,
              time: msg.time,
              repliedTo: msg.repliedTo !== undefined ? msg.repliedTo : null,
              starred : msg.starred !== undefined ? msg.starred : null
            }
          ]
        }
      }
      if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
    })
    return formattedChatLog
  }

  const handleClick = (event, sender, msg) => {
    event.preventDefault()
    setVisible(true)
    setAnchorPoint({ x: event.pageX, y: event.pageY })
    setSelected(msg)
    setSender(sender)
    //console.log(index)
  }

  const handleReplyClick = e => {
    e.preventDefault()
    ref.current.focus()
    setOp('reply')
    setVisible(false)
  }

  const handleStarMsg = e => {
    e.preventDefault()
    dispatch(starMsg({...selectedUser, message: selected }))
    setSelected(null)
    setVisible(false)
  }

  const handleEditMsg = e => {
    e.preventDefault()
    ref.current.focus()
    setOp('edit')
    setMsg(selected)
    setVisible(false)
  }

  const handleDeleteMsg = e => {
    e.preventDefault()
    dispatch(deleteMsg({...selectedUser, message: selected, senderId : sender}))
    setSelected(null)
    setVisible(false)
  }


  // ** Renders user chat
  const renderChats = () => {
    const chatData = formattedChatData()
    return (
      <>
      {
        chatData.map((item, index) => {
        return (
          <div
            key={index}
            className={classnames('chat', {
              'chat-left': item.senderId !== 11
            })}
            onClick={() => { setVisible(false); setMsg('') }}
          >
            <div className='chat-avatar'>
              <Avatar
                imgWidth={36}
                imgHeight={36}
                className='box-shadow-1 cursor-pointer'
                img={item.senderId === 11 ? userProfile.avatar : selectedUser.contact.avatar}
              />
            </div>
            

            <div className='chat-body'>
              {item.messages.map((chat) => (
                <div key={chat.msg} className='chat-content'>
                  {
                    chat.repliedTo !== null ? <div>
                      <div style={{ opacity:'0.5', backgroundColor:'white', color : 'black' }}>{chat.repliedTo}</div>
                      <p onContextMenu={e => handleClick(e, item.senderId, chat.msg)}>{chat.msg}</p>
                    </div> : <p onContextMenu={e => handleClick(e, item.senderId, chat.msg)} onTouchStart={e => console.log(e)}>{chat.msg}</p>
                  }
                </div>
              ))}
            </div>
          </div>
          )
        })
      }
      { 
        visible &&
        <div style={{ top: anchorPoint.y, left: anchorPoint.x }} className="contextMenu">
          <div className="contextMenu--option" onClick={handleReplyClick}>Reply</div>
          <div className="contextMenu--option" onClick={handleStarMsg}>Pin</div>
          {sender === 11 && <div className="contextMenu--option" onClick={handleEditMsg}>Edit</div>}
          <div className="contextMenu--option" onClick={handleDeleteMsg}>Delete</div>
        </div>
      }
      </>
    )
  }

  const renderPinnedPost = () => {
    const chatData = formattedChatData()
    return (
      <>
      {
        chatData.map((item) => {
        return (
            <>
            {item.messages.map((chat) => (
              <>
                {
                  chat.starred !== null &&
                  <>
                    <div style={{ borderLeft: "6px solid blue", height: "45px" }}></div>
                    <div style={{ display:'grid', gridTemplateColumns:'100%'}}>
                      <div style={{color:'blue'}}>Pinned Message</div>
                      <div>{chat.msg}</div>
                    </div>
                  </>
                }
              </>
            ))}
            </>
          )
        })
      }
      </>
    )
  }

  // ** Opens right sidebar & handles its data
  const handleAvatarClick = obj => {
    handleUserSidebarRight()
    handleUser(obj)
  }

  // ** On mobile screen open left sidebar on Start Conversation Click
  const handleStartConversation = () => {
    if (!Object.keys(selectedUser).length && !userSidebarLeft && window.innerWidth < 992) {
      handleSidebar()
    }
  }

  // ** Sends New Msg
  const handleSendMsg = e => {
    e.preventDefault()
    if (msg.length && op === 'edit') {
      dispatch(editMsg({...selectedUser, message: selected, editedMsg: msg }))
    } else if (msg.length) {
      dispatch(sendMsg({ ...selectedUser, message: msg, repliedTo : selected  }))
      setMsg('')
      setSelected(null)
    }
    setOp('')
  }

  // ** ChatWrapper tag based on chat's length
  const ChatWrapper = Object.keys(selectedUser).length && selectedUser.chat ? PerfectScrollbar : 'div'

  return (
    <div className='chat-app-window'>
      <div className={classnames('start-chat-area', { 'd-none': Object.keys(selectedUser).length })}>
        <div className='start-chat-icon mb-1'>
          <MessageSquare />
        </div>
        <h4 className='sidebar-toggle start-chat-text' onClick={handleStartConversation}>
          Start Conversation
        </h4>
      </div>
      {Object.keys(selectedUser).length ? (
        <div className={classnames('active-chat', { 'd-none': selectedUser === null })}>
          <div className='chat-navbar'>
            <header className='chat-header'>
              <div className='d-flex align-items-center'>
                <div className='sidebar-toggle d-block d-lg-none me-1' onClick={handleSidebar}>
                  <Menu size={21} />
                </div>
                <Avatar
                  imgHeight='36'
                  imgWidth='36'
                  img={selectedUser.contact.avatar}
                  status={selectedUser.contact.status}
                  className='avatar-border user-profile-toggle m-0 me-1'
                  onClick={() => handleAvatarClick(selectedUser.contact)}
                />
                <h6 className='mb-0'>{selectedUser.contact.fullName}</h6>
              </div>
              <div className='d-flex align-items-center'>
                <PhoneCall size={18} className='cursor-pointer d-sm-block d-none me-1' />
                <Video size={18} className='cursor-pointer d-sm-block d-none me-1' />
                <Search size={18} className='cursor-pointer d-sm-block d-none' />
                <UncontrolledDropdown className='more-options-dropdown'>
                  <DropdownToggle className='btn-icon' color='transparent' size='sm'>
                    <MoreVertical size='18' />
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem href='/' onClick={e => e.preventDefault()}>
                      View Contact
                    </DropdownItem>
                    <DropdownItem href='/' onClick={e => e.preventDefault()}>
                      Mute Notifications
                    </DropdownItem>
                    <DropdownItem href='/' onClick={e => e.preventDefault()}>
                      Block Contact
                    </DropdownItem>
                    <DropdownItem href='/' onClick={e => e.preventDefault()}>
                      Clear Chat
                    </DropdownItem>
                    <DropdownItem href='/' onClick={e => e.preventDefault()}>
                      Report
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </header>
            <div className='chat-pinned'>
              <>{renderPinnedPost()}</>
            </div>
          </div>

          <ChatWrapper ref={chatArea} className='user-chats' options={{ wheelPropagation: false }}>
            {selectedUser.chat ? <div className='chats'>{renderChats()}</div> : null}
          </ChatWrapper>

          {
            selected !== null &&
            <div style={{display:'grid', gridTemplateColumns:'20% 78% 2%', border:'1px solid black', marginTop:'2%'}}>
              <div style={{ borderLeft: "6px solid green", height: "45px" }}></div>
              <div style={{ marginLeft:'-20%'}}>{selected}</div>
              <div style={{ cursor:'pointer'}}><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' width='10px' onClick={() => { setSelected(null); setMsg('') }}/></div>
            </div>
          }
          <Form className='chat-app-form' onSubmit={e => handleSendMsg(e)}>
            <InputGroup  className='input-group-merge me-1 form-send-message'>
              <InputGroupText>
                <Mic className='cursor-pointer' size={14} />
              </InputGroupText>
              <Input innerRef={ref}
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder='Type your message or use speech to text'
              />
              <InputGroupText>
                <Label className='attachment-icon mb-0' for='attach-doc'>
                  <Image className='cursor-pointer text-secondary' size={14} />
                  <input type='file' id='attach-doc' hidden />
                </Label>
              </InputGroupText>
            </InputGroup>
            <Button className='send' color='primary'>
              <Send size={14} className='d-lg-none' />
              <span className='d-none d-lg-block'>Send</span>
            </Button>
          </Form>
        </div>
      ) : null}
    </div>
  )
}

export default ChatLog
