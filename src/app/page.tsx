import Background from './components/Background';
import Message from './components/Message';
import Bubbles from './components/Bubbles';
import Counter from './components/Counter';

export default function Page() {
  return(
    <>
      <Counter>
        <Background>
          <Bubbles />
          <Message />
        </Background>
      </Counter>
    </>
  )
}
