# Javascript
https://www.youtube.com/watch?v=EerdGm-ehJQ&t=34s
Done the course

# React
https://www.youtube.com/watch?v=TtPXvEcE11E
4:56 proper react setup

https://www.youtube.com/watch?v=SqcY0GlETPk&pp=ugUEEgJlbg%3D%3D

## Library
react js > react shared core library
react dom > react website library
babel > js comiler.... translate other code into js
    With react we use .jsx file (Javascript with more features)

### React Notes

With react, you can create a container and render everything in there. Better isolation.
```
    const container = document.querySelector('.js-container');
    ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');
```

With react, you can direclty write html in jsx file like below
```
    const button = <button>test button</button>
```

React can create element without dom
Better error checking

#### Componets
Just a piece of the website
Componet name must start with Capital letter

``` We can create our own html element with react
        function ChatInput (){
            return (
            <div> 
                <input />
                <button> Send </button>
            </div>)
        }

        const div = (
        <div>
            <ChatInput></ChatInput>
        </div>
        )
```

#### Props
Ever componet contains one variable which is an object that contain all the html attribute we gave
``` We can create our own html element with react
        function ChatMessage(props){ 
          return(
            <div>
              {props.message}
              <img src = "img/user.png" width="50"/>
            </div>
          )
        }

        const app = (
        <div>
            <ChatInput />
            <ChatMessage message="Hello chatbot" />
        </div>
        )
```

#### State
 - Data that is connected to the HTML, we set it using use state which returns an array
 - first item is the curr data, second is a set method
 - we just need to update the data and not the html, that part is handled by react
 - state is not updated immediately, only done after all the code is done
```
      const chatMessagesState = React.useState([
        {
              sender:"user",
              message:"Hello chatbot",
              id:"id1",
        },    
      ]);

      // first value of the state array is the current data
      const chatMessages = chatMessagesState[0] 
      // second value of the state array is a function to update the data
      const setChatMessages= chatMessagesState[1] 

      function SendMessage(){
        setChatMessages([
            // spread operator which unpack the array 
            ...chatMessages, 
            {
                  sender:"user",
                  message:"test",
                  id: crypto.randomUUID(),
            },
          ])
      }

```
Lifting the state up

#### Hocks
Insert react feature into code

useState -> Data linked with HTML
useEffect -> Event lister
useRef -> Dom

#### Event Handler